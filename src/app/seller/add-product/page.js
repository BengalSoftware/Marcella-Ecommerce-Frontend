import BackButton from '@/components/backButton/BackButton';
import AddProductForm from '@/components/form/seller/product/AddProductForm';
import React from 'react';

const AddProductPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-white p-4 shadow rounded-md'>
                <h1 className='text-2xl font-medium'>Add New Product</h1>
                <BackButton />
            </div>
            <AddProductForm />
        </div>
    );
};

export default AddProductPage;