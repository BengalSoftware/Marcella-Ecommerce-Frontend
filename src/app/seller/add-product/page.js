import AddProductForm from '@/components/form/seller/product/AddProductForm';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

const AddProductPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-white p-4 shadow rounded-md'>
                <h1 className='text-2xl font-medium'>Add New Product</h1>
                <button className='bg-black text-white text-sm font-light px-2 py-1 rounded flex items-center hover:bg-dark'><IoIosArrowBack />Back</button>
            </div>
            <AddProductForm />
        </div>
    );
};

export default AddProductPage;