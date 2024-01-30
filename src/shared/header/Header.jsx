import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import Link from 'next/link';
import { FiUser } from "react-icons/fi";

const Header = () => {
    return (
        <div className='bg-g-primary'>
            <div className="container mx-auto py-4">
                {/* top header start */}
                <div className='lg:flex items-center justify-between hidden'>
                    <div className='flex items-center justify-end gap-5 text-white mb-5 text-sm'>
                        <Link href='/' className='text-white text-sm border-r border-green-700 pr-4'>Customer Service  </Link>
                        <Link href='' className='border-r pr-4 border-green-700'>Our Address</Link>
                        <p>Call Us On +8801810-077844</p>
                    </div>
                    <div className='flex items-center justify-end gap-5 text-white mb-5 text-sm'>
                        <Link href='/' className='text-white text-sm border-r border-green-700 pr-4'>Become a seller</Link>
                        <Link href='' className='border-r pr-4 border-green-700'>Contact</Link>
                        <Link href='' className='flex items-center gap-2' ><FiUser /> Account</Link>
                    </div>
                </div>
                {/* top header end */}
                <div className='flex items-center justify-between'>
                    <div className='w-1/4'>
                        <h1 className='text-5xl font-semibold text-white'>MARCELA</h1>
                    </div>
                    <div className='w-2/4 flex items-center justify-center'>
                        <div className='bg-white w-full flex items-center rounded-full px-4'>
                            <input className='w-full py-3 pr-3 outline-none rounded-full' placeholder='Search for products..' type="text" name="" id="" />
                            <IoIosSearch className='text-2xl' />
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex items-center justify-end gap-6'>
                            <CiHeart className='bg-white text-3xl rounded-full p-1.5' />
                            <span className='text-white border-x px-4 border-green-700'>
                                <p>Cart</p>
                                <p className='font-medium'>1800</p>
                            </span>
                            <span className='bg-white rounded-full p-1.5 relative'>
                                <RiShoppingBag3Line className='text-xl font-light' />
                                <p className='absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] p-0.5 border border-white'>10</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;