'use client'
import React from 'react';
import Categories from './Categories';
import Banner from './Banner';

const BannerCategories = () => {
    return (
        <div className='grid grid-cols-5 my-5'>
            <div className='col-span-1'>
                <Categories />
            </div>
            <div className='col-span-4'>
                <Banner />
            </div>
        </div>
    );
};

export default BannerCategories;