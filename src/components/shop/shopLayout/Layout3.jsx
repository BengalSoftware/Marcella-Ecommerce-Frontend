'use client'
import { productSettings } from '@/utility/sliderSettings/productSettings';
import React from 'react';
import banner1 from '../../../../public/assets/menu-3.jpg'
import banner2 from '../../../../public/assets/menu-4.jpg'
import banner3 from '../../../../public/assets/seller2.png'
import banner4 from '../../../../public/assets/category.jpg'
import banner5 from '../../../../public/assets/ads2.webp'
import banner6 from '../../../../public/assets/mega.jpg'
import product1 from '../../../../public/assets/fogg.webp'
import product2 from '../../../../public/assets/product4.webp'
import product3 from '../../../../public/assets/mens.jpg'
import Slider from 'react-slick';
import ProductCard from '@/components/card/ProductCard';
import Image from 'next/image';
import SellerShopIndex from '..';

const Layout3 = () => {
    return (
        <div className='my-4'>

            <div className='my-4'>
                <div className='grid grid-cols-3 w-full items-center gap-x-4 mb-4'>
                    <Image className='rounded-md w-full h-52' src={banner4} alt='banner' quality={100} placeholder='blur' />
                    <Image className='rounded-md w-full h-52' src={banner5} alt='banner' quality={100} placeholder='blur' />
                    <Image className='rounded-md w-full h-52' src={banner6} alt='banner' quality={100} placeholder='blur' />
                </div>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-1 md:px-2'>
                                <ProductCard imgs={product3} />
                            </div>
                        )
                    }
                </Slider>
            </div>



            <div className='my-4'>
                <Image className='rounded-md mb-4' src={banner3} alt='banner' quality={100} placeholder='blur' />
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-1 md:px-2'>
                                <ProductCard imgs={product2} />
                            </div>
                        )
                    }
                </Slider>
            </div>



            <div className='my-4'>
                <div className='grid grid-cols-2 w-full items-center gap-x-4 mb-4'>
                    <Image className='rounded-md' src={banner1} alt='banner' quality={100} placeholder='blur' />
                    <Image className='rounded-md' src={banner2} alt='banner' quality={100} placeholder='blur' />
                </div>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-1 md:px-2'>
                                <ProductCard imgs={product1} />
                            </div>
                        )
                    }
                </Slider>
            </div>
            <SellerShopIndex />
        </div>
    );
};

export default Layout3;