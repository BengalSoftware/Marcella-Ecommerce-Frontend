'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../card/ProductCard';
import { getSellerProduct } from '@/lib/productApi/productApi';

const SellerShopIndex = ({ id }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSellerProduct(id)
                if (res) {
                    setProducts(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [id])

    return (
        <div className='mt-5'>
            <h1 className='md:text-2xl font-medium text-primary'>Just For you</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-5 gap-2 md:gap-4'>
                {
                    products?.result?.data?.map((product, idx) =>
                        <ProductCard
                            key={idx}
                            product={product}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default SellerShopIndex;