import ProductCard from '@/components/card/ProductCard';
import React from 'react';
import { getAllProduct } from '@/lib/productApi/productApi';
import Link from 'next/link';

const AllProducts = async () => {
    const data = await getAllProduct();
    
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Products</h1>
            <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5'>
                {
                    data?.result?.data?.map(product =>
                        <div key={product?._id}>
                            <ProductCard
                                product={product}
                            />
                        </div>
                    )
                }
            </div>
            <div className='mt-10 flex items-center justify-center mb-10'>
                <Link href='/products' className='bg-g-primary rounded-md px-6 py-3 md:px-10 lg:px-12 xl:px-16 text-white hover:opacity-90'>Load More</Link>
            </div>
        </div>
    );
};

export default AllProducts;