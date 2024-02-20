'use client'
import React, { useContext, useEffect, useState } from 'react';
import ProductDescriptionForm from './ProductDescriptionForm';
import UploadImage from './UploadImage';
import { addProductMutation } from '@/lib/productApi/productApi';
import CategoryForm from './CategoryForm';
import { TagsInput } from 'react-tag-input-component';
import BrandForm from './BrandForm';
import SizeForm from './SizeForm';
import ColorForm from './ColorForm';
import { StateContext } from '@/context/stateProvider/StateProvider';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AddProductForm = () => {
    const [updateProduct, setUpdateProduct] = useState([]);
    const [generateSlug, setGenerateSlug] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [termsCondition, setTermsCondition] = useState('');
    const [productTags, setProductTags] = useState([]);
    const [images, setUpImages] = useState([]);
    const { sellerPSuccess, setSellerPSuccess } = useContext(StateContext);
    const router = useRouter();

    let seller = '65c48f38d665588c5bd0816c'

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        if (updateProduct?.name) formData.append('name', updateProduct?.name)
        if (updateProduct?.slug) formData.append('slug', updateProduct?.slug)
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
        if (seller) formData.append('sellerId', seller)

        // form data.append JSON.stringify(data)
        if (updateProduct?.size) formData.append('size', JSON.stringify(updateProduct?.size))
        if (updateProduct?.color) formData.append('color', JSON.stringify(updateProduct?.color))
        if (productTags) formData.append("tags", JSON.stringify(productTags));
        if (images) formData.append('images', images)

        const res = await addProductMutation(formData);
        if (res) {
            setSellerPSuccess(true)
        }

    }
console.log(updateProduct?.categories)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newProduct = { ...updateProduct, shortDescription, description, termsCondition, images };
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
        }
    }, [sellerPSuccess])

    return (
        <div className='bg-white p-4 shadow rounded-md mt-5'>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div>
                        <label className='text-dark text-sm'>Product Name <span className='text-red-500'>*</span></label>
                        <input onChange={handleChange} type="text" name='name' required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Product Name' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Slug <span className='text-red-500'>*</span></label>
                        <div className='flex items-center border border-gray-300 mt-2 rounded-md'>
                            <input onChange={handleChange} defaultValue={generateSlug} type="text" name='slug' required className='outline-none rounded-l-md p-2 w-full placeholder:text-sm placeholder:font-light' placeholder='Slug' />
                            <button onClick={handleGenerateSlug} type='button' className='text-sm text-white rounded-r-md bg-primary py-2.5 px-1 hover:bg-dark'>Generate</button>
                        </div>
                    </div>

                    <BrandForm
                        handleChange={handleChange}
                    />
                    <div className='col-span-3'>
                        <CategoryForm
                            handleChange={handleChange}
                            updateProduct={updateProduct}
                        />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Product Type <span className='text-red-500'>*</span></label>
                        <select onChange={handleChange} name="productType" required className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mens-fashion">Mens Fashion</option>
                            <option value="Womens-fashion">Womens Fashion</option>
                            <option value="mobile-and-gadgets">Mobile and Gadgets</option>
                            <option value="home-appliance">Home Appliance</option>
                            <option value="computing-and-gaming">Computing and Gaming</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Model </label>
                        <input onChange={handleChange} type="text" name='model' className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Model' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Quantity <span className='text-red-500'>*</span></label>
                        <input onChange={handleChange} type="number" name='quantity' required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Quantity' />
                    </div>
                    <SizeForm
                        handleChange={handleChange}
                    />
                    <ColorForm
                        handleChange={handleChange}
                    />
                    <div>
                        <label className='text-dark text-sm'>Price <span className='text-red-500'>*</span></label>
                        <input onChange={handleChange} name='price' type="number" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Price' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Offer Price</label>
                        <input onChange={handleChange} name='offerPrice' type="number" className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Offer Price' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Status</label>
                        <select defaultValue={"IN-STOCK"} onChange={handleChange} name="status" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="IN-STOCK">In Stock</option>
                            <option value="OUT-OF-STOCK">Out of stock</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Alt Tag</label>
                        <input onChange={handleChange} name='altTag' type="text" className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Offer Price' />
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
                    <button className='bg-primary hover:bg-dark px-6 py-2 text-white rounded-md'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;