import React from 'react';
import ProductCard from '../../card/ProductCard';
import Image from 'next/image';
import { getFlashSaleProduct } from '@/lib/flashSale/flashSaleApi';
import ProductSlider from '@/utility/productSlider/ProductSlider';
import OfferCount from './OfferCount';
import Link from 'next/link';

const FestivalComponent = async ({ offerType, fesTitle, fesColor, fesImage, offerDate, endDate }) => {
    const data = await getFlashSaleProduct(offerType);

    return (
        <div className='bg-white rounded-xl shadow mb-6'>
            <div className='flex items-center justify-between md:pr-5'>
                <div className='flex items-center p-5 gap-8'>
                    <h1 className='md:text-2xl font-medium text-primary uppercase'>{fesTitle}</h1>
                    <div className='bg-primary text-white flex items-center gap-2 p-1 px-2 rounded-md shadow text-sm md:text-lg'>
                        <OfferCount endDate={endDate} />
                    </div>
                </div>
                <Link href={`/campaigns?flashsale=${offerType}`} className='border hidden md:block border-primary hover:bg-primary hover:text-white text-primary rounded-full px-4 py-1 font-medium ease-in-out duration-500'>Show All</Link>
            </div>
            <Image quality={100} className='w-full h-fit' src={fesImage} alt="" />

            <div className={`px-2 md:px-5 py-5 rounded-b-xl`} style={{ backgroundColor: fesColor }}>
                <ProductSlider>
                    {
                        data?.result?.data?.map(product =>
                            <div key={product?._id} className='px-1 md:px-2'>
                                <ProductCard
                                    product={product}
                                />
                            </div>
                        )
                    }
                </ProductSlider>
            </div>
        </div>
    );
};

export default FestivalComponent;