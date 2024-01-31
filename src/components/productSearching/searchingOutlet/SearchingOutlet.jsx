import ProductCard from '@/components/card/ProductCard';
import React from 'react';
import img from '../../../../public/assets/product.webp'

const SearchingOutlet = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-2'>
            {
                Array(20).fill().map((_, idx) =>
                    <ProductCard
                        key={idx}
                        imgs={img}
                    />
                )
            }
        </div>
    );
};

export default SearchingOutlet;