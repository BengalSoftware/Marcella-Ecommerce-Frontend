'use client'
import React, { useEffect, useState } from 'react';
import SellerShopIndex from '..';
import Image from 'next/image';
import ProductCard from '@/components/card/ProductCard';
import { getStoreLayoutQuery } from '@/lib/layoutStore/layoutStoreApi';
import ProductSlider from '@/utility/productSlider/ProductSlider';


const Layout2 = ({ email, id }) => {
    const [layouts, setLayouts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getStoreLayoutQuery(email)
                if (res) {
                    setLayouts(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [email])
    const products = layouts?.data?.filter(layout => layout?.images?.length === 2)
    return (
        <div>
            {
                products?.map((product, idx) =>
                    <div key={idx} className='my-4'>
                        <div className='grid grid-cols-2 w-full items-center gap-x-4 mb-4'>
                            {
                                product?.images?.map((banner, idx) =>
                                    <Image
                                        key={idx}
                                        height={500}
                                        width={1200}
                                        className='rounded-md mb-4'
                                        src={banner}
                                        alt='banner'
                                        quality={100}
                                    />
                                )
                            }
                        </div>

                        {
                            products?.length > 5 ?
                                <ProductSlider>
                                    {
                                        product?.products?.map(product => product?.sellerId === id &&
                                            <div key={product?._id} className='px-1 md:px-2'>
                                                <ProductCard
                                                    product={product}
                                                />
                                            </div>
                                        )
                                    }
                                </ProductSlider> :
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                                    {
                                        product?.products?.map(product => product?.sellerId === id &&
                                            <ProductCard
                                                key={product?._id}
                                                product={product}
                                            />
                                        )
                                    }
                                </div>
                        }
                    </div>
                )
            }
            <SellerShopIndex id={id} />
        </div>
    );
};

export default Layout2;