import SellerShopIndex from '@/components/shop';
import ShopHeader from '@/components/shop/ShopHeader';
import React from 'react';

const ShopPage = () => {
    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0'>
                    <ShopHeader />
                    <SellerShopIndex />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;