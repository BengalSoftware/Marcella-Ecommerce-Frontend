'use client'
import ProductCard from '@/components/card/ProductCard';
import { productSettings } from '@/utility/sliderSettings/productSettings';
import React from 'react';
import Slider from 'react-slick';
import img from '../../../../public/assets/mens.jpg'

const MensFashion = () => {
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Mens Fashion</h1>
            <div className='mt-6'>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2'>
                                <ProductCard imgs={img} />
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default MensFashion;