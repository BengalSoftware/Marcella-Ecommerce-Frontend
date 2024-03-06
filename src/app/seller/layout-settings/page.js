import ChangeLayoutDrawer from '@/components/seller/layoutSettings/ChangeLayoutDrawer';
import ShopLayout from '@/components/shop/ShopLayout';
import React from 'react';

const LayoutSettings = () => {
    return (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <div className='flex items-center justify-between pr-4'>
                <h1 className='p-4'>Layout Settings</h1>
                <ChangeLayoutDrawer />
            </div>
            <div className='p-4 bg-secondary'>
                <ShopLayout />
            </div>
        </div>
    );
};

export default LayoutSettings;