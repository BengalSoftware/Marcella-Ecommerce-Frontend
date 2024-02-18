import React from 'react';
import ProductCard from '../card/ProductCard';
import img from '../../../public/assets/product2.webp'
import { getRelatedProduct } from '@/lib/productApi/productApi';

const RelatedProducts = async ({ slug }) => {
    const data = await getRelatedProduct(slug);
    console.log('related', data)
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Related Products</h1>
            {
                data?.result?.length > 0 ?
                    <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-5'>
                        {
                            data?.result?.map(product =>
                                <div key={product?._id}>
                                    <ProductCard product={product} />
                                </div>
                            )
                        }
                    </div> :
                    <p className='text-center md:text-xl font-medium text-dark mt-5'>No Related Product Found</p>
            }
        </div>
    );
};

export default RelatedProducts;