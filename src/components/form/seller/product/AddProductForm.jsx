import React from 'react';
import ProductDescriptionForm from './ProductDescriptionForm';

const AddProductForm = () => {
    return (
        <div className='bg-white p-4 shadow rounded-md mt-5'>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div>
                        <label className='text-dark text-sm'>Product Name <span className='text-red-500'>*</span></label>
                        <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Product Name' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Slug <span className='text-red-500'>*</span></label>
                        <div className='flex items-center border border-gray-300 mt-2 rounded-md'>
                            <input type="text" required className='outline-none rounded-l-md p-2 w-full placeholder:text-sm placeholder:font-light' placeholder='Slug' />
                            <button className='text-sm text-white rounded-r-md bg-primary py-2.5 px-1 hover:bg-dark'>Generate</button>
                        </div>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Categories <span className='text-red-500'>*</span></label>
                        <select required name="" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Subategories</label>
                        <select name="" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Subategories child</label>
                        <select name="" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Brand</label>
                        <select name="" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="">Mens fashion</option>
                            <option value="">Womens fashion</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Price <span className='text-red-500'>*</span></label>
                        <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Price' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Offer Price <span className='text-red-500'>*</span></label>
                        <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Offer Price' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Status</label>
                        <select name="" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="">In Stock</option>
                            <option value="">Out of stock</option>
                        </select>
                    </div>
                </div>
                <ProductDescriptionForm />
                <div className='flex justify-end mt-5'>
                    <button className='bg-primary hover:bg-dark px-6 py-2 text-white rounded-md'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;