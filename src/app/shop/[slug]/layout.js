'use client'
import ShopHeader from '@/components/shop/ShopHeader';
import ShopNavbar from '@/components/shop/ShopNavbar';
import { getSingleSellerById } from '@/lib/sellerApi/sellerApi';
import React, { useEffect, useState } from 'react';

const ShopLayout = ({ children }) => {
    const [sellerInfo, setSellerInfo] = useState(null);
    const [sellerId, setSellerId] = useState(null);


    useEffect(() => {
        const fetLoaclData = () => {
            const id = JSON.parse(localStorage.getItem('sci'))
            setSellerId(id)
        }
        fetLoaclData()
        const fetchData = async () => {
            try {
                if (sellerId) {
                    const res = await getSingleSellerById(sellerId)
                    if (res) {
                        setSellerInfo(res)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [sellerId])
    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0'>
                    <ShopHeader sellerInfo={sellerInfo} />
                    <ShopNavbar sellerInfo={sellerInfo} />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ShopLayout;