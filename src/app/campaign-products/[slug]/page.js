'use client'
import ProductCard from '@/components/card/ProductCard';
import DesktopBannerLoader from '@/components/loader/DesktopBannerLoader';
import { getSingleDesktopBanner } from '@/lib/bannerApi/bannerApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CampaignProductsPage = ({ params }) => {
    const { slug } = params || {};
    const [rProduct, setRProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getSingleDesktopBanner(slug);
                if (data) {
                    setRProduct(data)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [slug])

    return (
        <div className='container mx-auto py-5'>
            <div className='mx-4 md:mx-0'>
                {loading ? <DesktopBannerLoader /> :
                    <Image
                        width={1200}
                        height={420}
                        src={rProduct?.data?.image}
                        alt={rProduct?.data?.name || ''}
                        quality={100}
                        className='h-fit md:h-[19rem] xl:h-auto w-full rounded-md'
                    />}
                <h1 className='text-2xl font-medium mt-6 md:mt-10'>Campaign Products</h1>
                {rProduct?.data?.campaignProducts?.length > 0 ?
                    <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5'>
                        {
                            rProduct?.data?.campaignProducts?.map(product => (
                                <div key={product?._id}>
                                    <ProductCard product={product} />
                                </div>
                            ))
                        }
                    </div>
                    :
                    <p className='text-center my-5 min-h-screen'>No Campaign Product Found</p>
                }
            </div>
        </div>
    );
};

export default CampaignProductsPage;