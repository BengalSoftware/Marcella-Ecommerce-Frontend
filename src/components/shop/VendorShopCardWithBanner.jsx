'use client'
import Image from 'next/image';
import React from 'react';
import ProductCard from '../card/ProductCard';
import ProductSlider from '@/utility/productSlider/ProductSlider';

const VendorShopCardWithBanner = ({ id, banner, products }) => {
    return (
        <div className='my-4'>
            {
                banner?.map((ban, idx) =>
                    <Image
                        key={idx}
                        height={500}
                        width={1200}
                        className='rounded-md mb-4'
                        src={ban}
                        alt='banner'
                        quality={100}
                    />)
            }

            {
                products?.length > 5 ?
                    <ProductSlider>
                        {
                            products?.map(product => product?.sellerId === id &&
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
                            products?.map(product => product?.sellerId === id &&
                                <ProductCard
                                    key={product?._id}
                                    product={product}
                                />
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default VendorShopCardWithBanner;