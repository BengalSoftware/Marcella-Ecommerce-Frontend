'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../../card/ProductCard';
import Slider from 'react-slick';
import { productSettings } from '../../../utility/sliderSettings/productSettings';
import Image from 'next/image';
import { getFlashSaleProduct } from '@/lib/flashSale/flashSaleApi';

const FestivalComponent = ({ offerType, fesTitle, fesColor, fesImage, offerDate, endDate }) => {
    const [countdown, setCountdown] = useState(null);
    const [products, setproducts] = useState(null);


    useEffect(() => {
        const targetDate = new Date(endDate);

        const interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const formattedCountdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            setCountdown(formattedCountdown);

            if (distance < 0) {
                clearInterval(interval);
                setCountdown("Offer expired");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getFlashSaleProduct(offerType?.[0]);
                if (res) {
                    setproducts(res);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [offerType]);

    return (
        <div className='bg-white rounded-xl shadow mb-6'>
            <div className='flex items-center justify-between md:pr-5'>
                <div className='flex items-center p-5 gap-8'>
                    <h1 className='md:text-2xl font-medium text-primary uppercase'>{fesTitle}</h1>
                    <div className='bg-primary text-white flex items-center gap-2 p-1 px-2 rounded-md shadow text-sm md:text-lg'>
                        <h1>{countdown}</h1>
                    </div>
                </div>
                <button className='border hidden md:block border-primary hover:bg-primary hover:text-white text-primary rounded-full px-4 py-1 font-medium ease-in-out duration-500'>Show All</button>
            </div>
            <Image quality={100} className='w-full h-fit' src={fesImage} alt="" />

            <div className={`px-2 md:px-5 py-5 rounded-b-xl`} style={{ backgroundColor: fesColor }}>
                <Slider {...productSettings}>
                    {
                        products?.result?.data?.map(product =>
                            <div key={product?._id} className='px-1 md:px-2'>
                                <ProductCard
                                    product={product}
                                />
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default FestivalComponent;