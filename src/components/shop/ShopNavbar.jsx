'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const ShopNavbar = () => {
    const pathname = usePathname();

    return (
        <div className='bg-white mt-4 shadow rounded-md py-3 md:flex items-center justify-between'>
            <ul className='flex items-center justify-center md:justify-start mb-5 md:mb-0 gap-10 mx-5'>
                <li><Link href='/shop/bengal-shop' className={`py-3 border-b-2 ${(pathname === '/shop/bengal-shop') ? 'border-b-primary text-primary' : 'border-b-white'}`}>Home</Link></li>
                <li><Link href='/shop/bengal-shop/all-products' className={`py-3 border-b-2 ${(pathname === '/shop/bengal-shop/all-products') ? 'border-b-primary text-primary' : 'border-b-white'}`}>All Products</Link></li>
                {/* <li><Link href='/shop/bengal-shop/profile' className={`py-3 border-b-2 ${(pathname === '/shop/bengal-shop/profile') ? 'border-b-primary text-primary' : 'border-b-white'}`}>Profile</Link></li> */}
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