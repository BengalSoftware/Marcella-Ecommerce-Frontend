import BackButton from '@/components/backButton/BackButton';
import AddProductForm from '@/components/form/seller/product/AddProductForm';
import React from 'react';

const ProductEditPage = ({ params }) => {
    const { id } = params || {};
  
    return (
        <div>
            <div className='flex items-center justify-between bg-white p-4 shadow rounded-md'>
                <h1 className='text-2xl font-medium'>Edit New Product</h1>
                <BackButton />
            </div>
            <AddProductForm id={id} />
        </div>
    );
};

export default ProductEditPage;