'use client'
import React, { useContext, useEffect, useState } from 'react';
import ProductDescriptionForm from './ProductDescriptionForm';
import UploadImage from './UploadImage';
import { addProductMutation, getSingleProductDetails, updateProductMutation } from '@/lib/productApi/productApi';
import CategoryForm from './CategoryForm';
import { TagsInput } from 'react-tag-input-component';
import BrandForm from './BrandForm';
import SizeForm from './SizeForm';
import ColorForm from './ColorForm';
import { StateContext } from '@/context/stateProvider/StateProvider';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import ProductTypeForm from './ProductTypeForm';

const AddProductForm = ({ id }) => {
    const [products, setProducts] = useState(null);
    const [updateProduct, setUpdateProduct] = useState([]);
    const [generateSlug, setGenerateSlug] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [termsCondition, setTermsCondition] = useState('');
    const [productTags, setProductTags] = useState([]);
    const [selectedSizeOption, setSelectedSizeOptin] = useState([]);
    const [selectedColorOption, setSelectedColorOptin] = useState([]);
    const [images, setUpImages] = useState([]);
    const { sellerPSuccess, setSellerPSuccess } = useContext(StateContext);
    const { seller } = useContext(AuthContext);
    const router = useRouter();
    const [singleSeller, setSingleSeller] = useState(null);
    const [productTypes, setProductTypes] = useState(null)

    const { name, slug, altTag, manufacturer, offerPrice, price, productType, quantity, status, subcategories, subcategoryChildren, model, tags, size, color } = products?.result || {};

    // let seller = '65c48f38d665588c5bd0816c'

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        if (updateProduct?.name) formData.append('name', updateProduct?.name)
        if (updateProduct?.slug || generateSlug) formData.append('slug', updateProduct?.slug || generateSlug)
        if (updateProduct?.altTag) formData.append('altTag', updateProduct?.altTag)
        if (updateProduct?.model) formData.append('model', updateProduct?.model)
        if (updateProduct?.manufacturer) formData.append('manufacturer', updateProduct?.manufacturer)
        if (updateProduct?.price) formData.append('price', updateProduct?.price)
        if (updateProduct?.offerPrice) formData.append('offerPrice', updateProduct?.offerPrice)
        if (updateProduct?.quantity) formData.append('quantity', updateProduct?.quantity)
        if (updateProduct?.status) formData.append('status', updateProduct?.status)
        if (updateProduct?.productType) formData.append('productType', updateProduct?.productType)
        if (shortDescription) formData.append('shortDescription', shortDescription)
        if (description) formData.append('description', description)
        if (termsCondition) formData.append('specification', termsCondition)
        if (updateProduct?.categories) formData.append('categories', updateProduct?.categories)
        if (updateProduct?.subcategories) formData.append('subcategories', updateProduct?.subcategories)
        if (updateProduct?.subcategoryChildren) formData.append('subcategoryChildren', updateProduct?.subcategoryChildren)
        if (singleSeller) formData.append('sellerId', singleSeller)

        // form data.append JSON.stringify(data)
        if (selectedSizeOption) formData.append('size', JSON.stringify(selectedSizeOption))
        if (selectedColorOption) formData.append('color', JSON.stringify(selectedColorOption))
        if (productTags) formData.append("tags", JSON.stringify(productTags));
        if (images) formData.append('images', images?.[0])
            formData.append("createdBy", "seller");

        if (id) {
            const res = await updateProductMutation(id, formData);
            setSellerPSuccess(true)
        } else {
            const res = await addProductMutation(formData);
            if (res) {
                setSellerPSuccess(true)
            }
        }

    }

    const handleChange = (e) => {
        const name = e.target?.name;
        const value = e.target?.value;

        const newProduct = { ...updateProduct, shortDescription, description, termsCondition, selectedSizeOption, selectedColorOption, images };
        newProduct[name] = value;
        setUpdateProduct(newProduct);
    }



    const handleGenerateSlug = () => {
        let originalString = updateProduct?.name;
        let lowercaseString = originalString?.toLowerCase();
        let nameArray = lowercaseString?.split(" ");
        let concatenatedString = nameArray?.join("-");
        setGenerateSlug(concatenatedString)
    }

    useEffect(() => {
        if (sellerPSuccess) {
            toast.success('Product Added Successfull');
            router.push('/seller/product');
            setSellerPSuccess(false)
        }
    }, [sellerPSuccess])



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingleProductDetails(id)
                if (res) {
                    setProducts(res)
                }
            } catch (error) {

            }
        };
        if (id) {
            fetchData();
        }
    }, [id])


    // fetch single seller 
    useEffect(() => {
        const fetchData = async () => {
            if (seller?.data?.user?.email) {
                try {
                    const res = await getSingleSeller(seller?.data?.user?.email);
                    if (res?.data) {
                        setSingleSeller(res?.data?._id);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchData();
    }, [seller?.data?.user?.email]);

    return (
        <div className='bg-white p-4 shadow rounded-md mt-5'>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div>
                        <label className='text-dark text-sm'>Product Name <span className='text-red-500'>*</span></label>
                        <input onChange={handleChange} defaultValue={name} type="text" name='name' required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Product Name' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Slug <span className='text-red-500'>*</span></label>
                        <div className='flex items-center border border-gray-300 mt-2 rounded-md'>
                            <input onChange={handleChange} defaultValue={slug ? slug : generateSlug} type="text" name='slug' required className='outline-none rounded-l-md p-2 w-full placeholder:text-sm placeholder:font-light' placeholder='Slug' />
                            <button onClick={handleGenerateSlug} type='button' className='text-sm text-white rounded-r-md bg-primary py-2.5 px-1 hover:bg-dark'>Generate</button>
                        </div>
                    </div>

                    <BrandForm
                        handleChange={handleChange}
                        manufacturer={manufacturer}
                    />
                    <div className='col-span-3'>
                        <CategoryForm
                            handleChange={handleChange}
                            updateProduct={updateProduct}
                            subcategories={subcategories}
                            subcategoryChildren={subcategoryChildren}
                        />
                    </div>
                    <ProductTypeForm
                        handleChange={handleChange}
                        productType={productType}
                    />
                    <div>
                        <label className='text-dark text-sm'>Model </label>
                        <input onChange={handleChange} defaultValue={model} type="text" name='model' className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Model' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Quantity <span className='text-red-500'>*</span></label>
                        <input onChange={handleChange} defaultValue={quantity} type="number" name='quantity' required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Quantity' />
                    </div>
                    <SizeForm
                        setSelectedSizeOptin={setSelectedSizeOptin}
                        sizeData={size}
                    />
                    <ColorForm
                        setSelectedColorOptin={setSelectedColorOptin}
                        colorData={color}
                    />
                    <div>
                        <label className='text-dark text-sm'>Price <span className='text-red-500'>*</span></label>
                        <input onChange={handleChange} defaultValue={price} name='price' type="number" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Price' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Offer Price</label>
                        <input onChange={handleChange} defaultValue={offerPrice} name='offerPrice' type="number" className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Offer Price' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Status</label>
                        <select defaultValue={status} onChange={handleChange} name="status" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="IN-STOCK">In Stock</option>
                            <option value="OUT-OF-STOCK">Out of stock</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Alt Tag</label>
                        <input onChange={handleChange} defaultValue={altTag} name='altTag' type="text" className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Offer Price' />
                    </div>
                </div>
                <div>
                    <label className='text-dark text-sm'>Tags</label>
                    <TagsInput separators={","} required value={productTags} onChange={setProductTags} name="tags" />
                </div>
                <ProductDescriptionForm
                    description={description}
                    setDescription={setDescription}
                    shortDescription={shortDescription}
                    setShortDescription={setShortDescription}
                    termsCondition={termsCondition}
                    setTermsCondition={setTermsCondition}
                    handleChange={handleChange}
                />
                <UploadImage
                    upImages={images}
                    setUpImages={setUpImages}
                />
                <div className='flex justify-end mt-5'>
                    <button className='bg-primary hover:bg-dark px-6 py-2 text-white rounded-md'>{id ? 'Update' : 'Submit'}</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;