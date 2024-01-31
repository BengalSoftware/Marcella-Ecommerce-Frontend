import React from 'react';
import Slider from 'react-slick';
import { banneSettings } from '../../../utility/sliderSettings/bannerSettings';
import banner1 from '../../../../public/assets/banner1.webp'
import banner2 from '../../../../public/assets/banner2.webp'
import banner3 from '../../../../public/assets/banner3.webp'
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <Slider {...banneSettings}>
                <div>
                    <Image quality={100} placeholder='blur' className='h-fit xl:h-[28rem] w-full' src={banner1} alt="" />
                </div>
                <div>
                    <Image quality={100} placeholder='blur' className='h-fit xl:h-[28rem] w-full' src={banner2} alt="" />
                </div>
                <div>
                    <Image quality={100} placeholder='blur' className='h-fit xl:h-[28rem] w-full' src={banner3} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;