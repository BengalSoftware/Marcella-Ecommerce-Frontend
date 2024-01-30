import React from 'react';
import ProductCard from '../card/ProductCard';
import img from '../../../public/assets/product2.webp'

const RelatedProducts = () => {
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Related Products</h1>
            <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5'>
                {
                    Array(10).fill().map((_, idx) =>
                        <div key={idx}>
                            <ProductCard imgs={img} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RelatedProducts;