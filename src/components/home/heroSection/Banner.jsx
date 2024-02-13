'use client'
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { banneSettings } from '../../../utility/sliderSettings/bannerSettings';
import Image from 'next/image';
import { getDesktopBanner } from '@/lib/bannerApi/bannerApi';
import DesktopBannerLoader from '@/components/loader/DesktopBannerLoader';

const Banner = () => {
    const [bannerData, setBannerData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await getDesktopBanner();
                setBannerData(data);
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);


    return (
        <>
            {
                isLoading ? <DesktopBannerLoader /> :
                    <div>
                        <Slider {...banneSettings}>
                            {
                                bannerData?.data?.map(ban =>
                                    <div key={ban?._id}>
                                        <Image
                                            width={1200}
                                            height={420}
                                            src={ban?.image}
                                            alt={ban?.name}
                                            quality={100}
                                            className='h-fit md:h-[22rem] xl:h-[25rem] w-full'
                                        />
                                    </div>
                                )
                            }
                        </Slider>
                    </div>
            }
        </>
    );
};

export default Banner;