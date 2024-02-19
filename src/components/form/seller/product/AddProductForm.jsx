'use client'
import React, { useState } from 'react';
import ProductDescriptionForm from './ProductDescriptionForm';
import UploadImage from './UploadImage';
import { addProductMutation } from '@/lib/productApi/productApi';

const AddProductForm = () => {
    const [updateProduct, setUpdateProduct] = useState([]);
    const [generateSlug, setGenerateSlug] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [termsCondition, setTermsCondition] = useState('');
    const [images, setUpImages] = useState([]);


    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        if (updateProduct?.name) formData.append('name', updateProduct?.name)
        if (updateProduct?.slug) formData.append('slug', updateProduct?.slug)
        if (updateProduct?.altTag) formData.append('altTag', updateProduct?.altTag)
        if (updateProduct?.size) formData.append('size', updateProduct?.size)
        if (updateProduct?.color) formData.append('color', updateProduct?.color)
        if (updateProduct?.model) formData.append('model', updateProduct?.model)
        if (updateProduct?.manufacturer) formData.append('manufacturer', updateProduct?.manufacturer)
        if (updateProduct?.price) formData.append('price', updateProduct?.price)
        if (updateProduct?.offerPrice) formData.append('offerPrice', updateProduct?.offerPrice)
        if (updateProduct?.quantity) formData.append('quantity', updateProduct?.quantity)
        if (updateProduct?.status) formData.append('status', updateProduct?.status)
        if (updateProduct?.tags) formData.append('tags', updateProduct?.tags)
        if (updateProduct?.categories) formData.append('categories', updateProduct?.categories)
        if (updateProduct?.subcategories) formData.append('subcategories', updateProduct?.subcategories)
        if (updateProduct?.subcategoryChildren) formData.append('subcategoryChildren', updateProduct?.subcategoryChildren)
        if (updateProduct?.productType) formData.append('productType', updateProduct?.productType)
        if (updateProduct?.shortDescription) formData.append('shortDescription', updateProduct?.shortDescription)
        if (updateProduct?.description) formData.append('description', updateProduct?.description)
        if (updateProduct?.termsCondition) formData.append('specification', updateProduct?.termsCondition)
        if (updateProduct?.images) formData.append('images', updateProduct?.images)
        
        await addProductMutation(formData);

    }

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
                    <div>
                        <label className='text-dark text-sm'>Categories <span className='text-red-500'>*</span></label>
                        <select onChange={handleChange} required name="categories" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mwn">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Subategories</label>
                        <select onChange={handleChange} name="subcategories" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mwn">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Subategories child</label>
                        <select onChange={handleChange} name="subcategoryChildren" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mwn">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Brand</label>
                        <select onChange={handleChange} name="manufacturer" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mwn">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Product Type <span className='text-red-500'>*</span></label>
                        <select onChange={handleChange} name="manufacturer" required className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mwn">Mens fashion</option>
                            <option value="">Womens fashion</option>
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
                    <div>
                        <label className='text-dark text-sm'>Size</label>
                        <select onChange={handleChange} name="size" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mwn">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Color</label>
                        <select onChange={handleChange} name="color" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="mwn">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
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
                        <select onChange={handleChange} name="status" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="">In Stock</option>
                            <option value="">Out of stock</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Alt Tag</label>
                        <input onChange={handleChange} name='altTag' type="text" className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Offer Price' />
                    </div>
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