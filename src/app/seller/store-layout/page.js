import StoreLayoutButton from '@/components/seller/storeLayout/StoreLayoutButton';
import React from 'react';

const StoreLayoutPage = () => {
    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <h1 className='text-xl font-medium pb-4 border-dashed border-b border-b-primary'>Store Layout</h1>
            <StoreLayoutButton />
        </div>
    );
};

export default StoreLayoutPage;