'use client'
import ProductCard from '@/components/card/ProductCard';
import { productSettings } from '@/utility/sliderSettings/productSettings';
import React from 'react';
import Slider from 'react-slick';

const PopularProducts = () => {
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Popular Products</h1>
            <div className='mt-6'>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-1 md:px-2'>
                                <ProductCard />
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default PopularProducts;