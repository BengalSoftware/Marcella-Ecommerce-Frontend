import ShopHeader from '@/components/shop/ShopHeader';
import ShopNavbar from '@/components/shop/ShopNavbar';
import React from 'react';

const ShopLayout = ({ children }) => {
    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0'>
                    <ShopHeader />
                    <ShopNavbar />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ShopLayout;