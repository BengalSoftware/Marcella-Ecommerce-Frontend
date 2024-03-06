import ShopLayout from '@/components/shop/ShopLayout';
import React from 'react';


const ShopPage = ({ params }) => {
    const { slug } = params || {}
   
    return (
        <div className='mt-5'>
            <ShopLayout slug={slug} />
        </div>
    );
};

export default ShopPage;