'use client'
import React, { useEffect, useState } from 'react';
import SearchHistory from '../productSearching/searchHistory/SearchHistory';
import { getFlashSaleProduct } from '@/lib/flashSale/flashSaleApi';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../card/ProductCard';

const CampaignsOutlet = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('flashsale') 
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFlashSaleProduct(search)
                setProducts(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <div className='flex items-center gap-5'>
                <SearchHistory />
            </div>
            {
                <>
                    {
                        products?.result?.data?.length > 0 ?
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-2'>
                                {
                                    products?.result?.data?.map(product =>
                                        <ProductCard
                                            key={product?._id}
                                            product={product}
                                        />
                                    )
                                }
                            </div> :
                            <p className='text-center mt-10 text-dark'>No Search Result Found</p>
                    }
                </>

            }
        </div>
    );
};

export default CampaignsOutlet;