'use client'
import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/seller1.png'
import productImg from '../../../public/assets/fogg.webp'
import ProductCard from '../card/ProductCard';
import { productSettings } from '@/utility/sliderSettings/productSettings';
import Slider from 'react-slick';

const VendorShopCardWithBanner = ({ banner, products }) => {
    return (
        <div className='my-4'>
            <Image className='rounded-md mb-4' src={banner} alt='banner' quality={100} placeholder='blur' />
            <Slider {...productSettings}>
                {
                    Array(5).fill().map((_, idx) =>
                        <div key={idx} className='px-1 md:px-2'>
                            <ProductCard imgs={products} />
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default VendorShopCardWithBanner;