'use client'
import React from 'react';
import ProductCard from '../../card/ProductCard';
import Slider from 'react-slick';
import { productSettings } from '../../../utility/sliderSettings/productSettings';
import Image from 'next/image';

const FestivalComponent = ({ products, fesTitle, fesColor, fesImage }) => {
    return (
        <div className='bg-white rounded-xl shadow mb-6'>
            <div className='flex items-center justify-between md:pr-5'>
                <div className='flex items-center p-5 gap-8'>
                    <h1 className='md:text-2xl font-medium text-primary uppercase'>{fesTitle}</h1>
                    <div className='bg-primary text-white flex items-center gap-2 p-1 px-2 rounded-md shadow text-sm md:text-lg'>
                        <h1>12d:</h1>
                        <h1>11h:</h1>
                        <h1>27m:</h1>
                        <h1>14s</h1>
                    </div>
                </div>
                <button className='border hidden md:block border-primary hover:bg-primary hover:text-white text-primary rounded-full px-4 py-1 font-medium ease-in-out duration-500'>Show All</button>
            </div>
            <Image quality={100} className='w-full h-fit' src={fesImage} alt="" />

            <div className={`px-2 md:px-5 py-5 rounded-b-xl`} style={{ backgroundColor: fesColor }}>
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

export default FestivalComponent;