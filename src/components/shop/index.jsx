import React from 'react';
import ProductCard from '../card/ProductCard';

const SellerShopIndex = () => {
    return (
        <div className='mt-5'>
            <h1 className='md:text-2xl font-medium text-primary'>Just For you</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-5 gap-4'>
                {
                    Array(10).fill().map((_, idx) =>
                        <ProductCard
                            key={idx}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default SellerShopIndex;