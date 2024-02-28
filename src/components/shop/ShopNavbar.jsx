'use client'
import { getSingleSellerById } from '@/lib/sellerApi/sellerApi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

const ShopNavbar = () => {
    const pathname = usePathname();
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

    console.log(sellerInfo)

    return (
        <div className='bg-white mt-4 shadow rounded-md py-3 md:flex items-center justify-between'>
            <ul className='flex items-center justify-center md:justify-start mb-5 md:mb-0 gap-10 mx-5'>
                <li><Link href={`/shop/${sellerInfo?.data?.slug}`} className={`py-3 border-b-2 ${(pathname.startsWith('/shop')) ? 'border-b-primary text-primary' : 'border-b-white'}`}>Home</Link></li>
                <li><Link href={`/shop/${sellerInfo?.data?.slug}/all-products`} className={`py-3 border-b-2 ${(pathname.endsWith('all-products')) ? 'border-b-primary text-primary' : 'border-b-white'}`}>All Products</Link></li>

            </ul>
            <div className='flex items-center justify-center md:w-1/4 mx-5'>
                <div className='bg-white w-full flex items-center rounded-full px-4 border border-gray-400'>
                    <input className='w-full py-2 pr-3 outline-none rounded-full placeholder:text-sm' placeholder='Search for products..' type="text" name="" id="" />
                    <IoIosSearch className='text-2xl' />
                </div>
            </div>
        </div>
    );
};

export default ShopNavbar;