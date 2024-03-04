import React from 'react';
import Categories from './Categories';
import Banner from './Banner';
import SliderAds from './SliderAds';

const BannerCategories = () => {
    return (
        <div className='lg:grid grid-cols-5 my-2 lg:mb-5'>
            <div className='lg:col-span-1 hidden lg:block'>
                <Categories />
            </div>
            <div className='lg:col-span-4'>
                <Banner />
            </div>
            {/* <div className='lg:col-span-1'>
                <SliderAds />
            </div> */}
        </div>
    );
};

export default BannerCategories;