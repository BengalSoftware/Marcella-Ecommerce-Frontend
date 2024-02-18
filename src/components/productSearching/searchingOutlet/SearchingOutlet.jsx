import ProductCard from '@/components/card/ProductCard';
import React from 'react';
import { getAllProduct } from '@/lib/productApi/productApi';

const SearchingOutlet = async () => {
    const data = await getAllProduct();
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-2'>
            {
                data?.result?.data.map(product =>
                    <ProductCard
                        key={product?._id}
                        product={product}
                    />
                )
            }
        </div>
    );
};

export default SearchingOutlet;