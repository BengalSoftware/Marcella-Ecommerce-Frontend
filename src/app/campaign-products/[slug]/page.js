import ProductCard from '@/components/card/ProductCard';
import { getSingleDesktopBanner } from '@/lib/bannerApi/bannerApi';
import Image from 'next/image';
import React from 'react';

const CampaignProductsPage = async ({ params }) => {
    const { slug } = params || {};
    const data = await getSingleDesktopBanner(slug)

    return (
        <div className='container mx-auto py-5'>
            <div className='mx-4 md:mx-0'>
                <Image
                    width={1200}
                    height={420}
                    src={data?.data?.image}
                    alt={data?.data?.name}
                    quality={100}
                    className='h-fit md:h-[19rem] xl:h-auto w-full rounded-md'
                />
                <h1 className='text-2xl font-medium mt-6 md:mt-10'>Campaign Products</h1>
                <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5'>
                    {
                        data?.data?.campaignProducts?.map(product => (
                            <div key={product?._id}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CampaignProductsPage;