import BackButton from '@/components/backButton/BackButton';
import FlashProductForm from '@/components/form/seller/flashProduct/FlashProductForm';
import React from 'react';

const AddFlashSaleProductPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-white p-4 shadow rounded-md'>
                <h1 className='text-2xl font-medium'>Add New Product</h1>
                <BackButton />
            </div>
            <FlashProductForm />
        </div>
    );
};

export default AddFlashSaleProductPage;