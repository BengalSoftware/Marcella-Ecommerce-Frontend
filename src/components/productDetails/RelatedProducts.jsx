'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../card/ProductCard';
import { getRelatedProduct } from '@/lib/productApi/productApi';

const RelatedProducts = ({ slug }) => {
    const [rProduct, setRProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRelatedProduct(slug);
                if (data) {
                    setRProduct(data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [slug])
    console.log(rProduct);
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Related Products</h1>
            {
                rProduct?.result?.length > 0 ?
                    <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2'>
                        {
                            rProduct?.result?.slice(0, 6)?.map(product =>
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