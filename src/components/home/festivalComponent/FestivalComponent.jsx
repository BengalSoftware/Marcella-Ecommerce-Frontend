'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../../card/ProductCard';
import Image from 'next/image';
import { getFlashSaleOfferType, getFlashSaleProduct } from '@/lib/flashSale/flashSaleApi';
import ProductSlider from '@/utility/productSlider/ProductSlider';
import OfferCount from './OfferCount';
import Link from 'next/link';
import FlashSaleLoader from '@/components/loader/FlashSaleLoader';

const FestivalComponent = ({ offerType, fesTitle, fesColor, offerDate, endDate }) => {
    const [flashType, setFlashType] = useState(null);
    const [flashProduct, setFlashProduct] = useState(null)
    const [flashLoding, setFlashLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setFlashLoading(true)
                const [flashTypeRes, flashProductRes] = await Promise.all([
                    getFlashSaleOfferType(),
                    getFlashSaleProduct(offerType)
                ])
                setFlashType(flashTypeRes)
                setFlashProduct(flashProductRes)
            } catch (error) {
                console.error(error)
            } finally {
                setFlashLoading(false)
            }
        }
        fetchData()
    }, [offerType])


    return (
        <>
            {
                flashLoding ? <FlashSaleLoader /> :
                    <div className='bg-white rounded-xl shadow mb-6'>
                        <div className='flex items-center justify-between md:pr-5'>
                            <div className='flex items-center p-5 gap-8'>
                                <h1 className='text-sm md:text-2xl font-medium text-primary uppercase'>{fesTitle}</h1>
                                <div className='bg-primary text-white flex items-center gap-2 p-1 px-2 rounded-md shadow text-sm md:text-lg'>
                                    <OfferCount endDate={endDate} />
                                </div>
                            </div>
                            <Link href={`/campaigns?flashsale=${offerType}`} className='border hidden md:block border-primary hover:bg-primary hover:text-white text-primary rounded-full px-4 py-1 font-medium ease-in-out duration-500'>Show All</Link>
                        </div>
                        {
                            flashType?.data?.map(img =>
                                img?.name === offerType && (
                                    <Image
                                        height={500}
                                        width={1200}
                                        quality={100}
                                        className='w-full h-fit'
                                        src={img?.image}
                                        alt=""
                                    />
                                )
                            )
                        }



                        <div className={`px-2 md:px-5 py-5 rounded-b-xl`} style={{ backgroundColor: fesColor }}>
                            {
                                flashProduct?.result?.data?.length > 5 ?
                                    <ProductSlider>
                                        {
                                            flashProduct?.result?.data?.map(product =>
                                                <div key={product?._id} className='px-1 md:px-2'>
                                                    <ProductCard
                                                        product={product}
                                                    />
                                                </div>
                                            )
                                        }
                                    </ProductSlider> :
                                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                                        {
                                            flashProduct?.result?.data?.map(product =>
                                                <ProductCard
                                                    key={product?._id}
                                                    product={product}
                                                />
                                            )
                                        }
                                    </div>
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default FestivalComponent;