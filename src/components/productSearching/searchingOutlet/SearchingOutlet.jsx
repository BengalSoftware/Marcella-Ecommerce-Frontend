'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/card/ProductCard';
import { getAllProductByQuery, getSellerProduct } from '@/lib/productApi/productApi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import SearchHistory from '../searchHistory/SearchHistory';
import { getSingleSellerById } from '@/lib/sellerApi/sellerApi';

const SearchingOutlet = ({ slug }) => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [sellerId, setSellerId] = useState(null)
    const [sellerInfo, setSellerInfo] = useState(null)

    useEffect(() => {

        const fetLoaclData = () => {
            const id = JSON.parse(localStorage.getItem('sci'))
            setSellerId(id)
        }
        fetLoaclData()
        const loadData = async () => {
            try {
                const params = new URLSearchParams(searchParams.toString());
                if (pathname.startsWith('/shop')) {
                    if (sellerInfo?.data?._id) {
                        const productsData = await getSellerProduct(sellerInfo?.data?._id);
                        setProducts(productsData);
                    } else {
                        const productsData = await getSellerProduct(sellerId);
                        setProducts(productsData);
                    }

                } else {
                    const productsData = await getAllProductByQuery(`?${params.toString()}`);
                    setProducts(productsData);
                }
            } catch (error) {
                console.error(error);
            }
        };

        loadData();
    }, [searchParams, sellerInfo?.data?._id, sellerId]);


    useEffect(() => {
        const fetLoaclData = () => {
            const id = JSON.parse(localStorage.getItem('sci'))
            setSellerId(id)
        }
        fetLoaclData()
        const fetchData = async () => {
            try {
                if (sellerId || slug) {
                    const res = await getSingleSellerById(sellerId || slug)
                    if (res) {
                        setSellerInfo(res)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [sellerId || slug])


    return (
        <div>
            <div className='flex items-center gap-5'>
                <SearchHistory />
            </div>
            {
                (pathname.startsWith('/shop')) ? <>
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
                    : <>
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

export default SearchingOutlet;