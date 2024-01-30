'use client'
import ProductCard from '@/components/card/ProductCard';
import React from 'react';
import img from '../../../../public/assets/product2.webp'

const AllProducts = () => {
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Products</h1>
            <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5'>
                {
                    Array(15).fill().map((_, idx) =>
                        <div key={idx}>
                            <ProductCard imgs={img} />
                        </div>
                    )
                }
            </div>
            <div className='mt-10 flex items-center justify-center'>
                <button className='bg-g-primary rounded-md px-6 py-3 md:px-10 lg:px-12 xl:px-16 text-white hover:opacity-90'>Load More</button>
            </div>
        </div>
    );
};

export default AllProducts;