import React from 'react';
import ads1 from '../../../../public/assets/category.jpg'
import ads2 from '../../../../public/assets/ads2.webp'
import Image from 'next/image';

const SliderAds = () => {
    return (
        <div className='overflow-y-scroll md:h-[22rem] xl:h-[25rem] seller-scrollbar hidden lg:block'>
            <Image quality={100} placeholder='blur' className='md:h-[11rem] xl:h-[12.5rem] w-full' src={ads1} alt="ads" />
            <Image quality={100} placeholder='blur' className='md:h-[11rem] xl:h-[12.5rem] w-full' src={ads2} alt="ads" />
            <Image quality={100} placeholder='blur' className='md:h-[11rem] xl:h-[12.5rem] w-full' src={ads1} alt="ads" />
            <Image quality={100} placeholder='blur' className='md:h-[11rem] xl:h-[12.5rem] w-full' src={ads2} alt="ads" />
            <Image quality={100} placeholder='blur' className='md:h-[11rem] xl:h-[12.5rem] w-full' src={ads1} alt="ads" />
            <Image quality={100} placeholder='blur' className='md:h-[11rem] xl:h-[12.5rem] w-full' src={ads2} alt="ads" />
        </div>
    );
};

export default SliderAds;