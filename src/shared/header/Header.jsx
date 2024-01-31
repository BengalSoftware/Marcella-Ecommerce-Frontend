'use client'
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import Link from 'next/link';
import { CgMenuGridO } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import MobileNav from '../mobileNav/MobileNav';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <div className='bg-g-primary'>
            <div className="container mx-auto py-4">
                <div className='mx-4 lg:mx-0'>
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
                            <h1 className='text-3xl lg:text-5xl font-semibold text-white'>MARCELA</h1>
                        </div>
                        <div className='w-2/4 hidden lg:flex items-center justify-center'>
                            <div className='bg-white w-full flex items-center rounded-full px-4'>
                                <input className='w-full py-3 pr-3 outline-none rounded-full' placeholder='Search for products..' type="text" name="" id="" />
                                <IoIosSearch className='text-2xl' />
                            </div>
                        </div>
                        <div className='w-1/4'>
                            <div className='flex items-center justify-end gap-6'>
                                <button className='bg-white text-xl rounded-full p-1.5'>
                                    <CiHeart />
                                </button>
                                <span className='text-white border-x px-4 border-green-700 hidden lg:block'>
                                    <p>Cart</p>
                                    <p className='font-medium'>1800</p>
                                </span>
                                <button className='bg-white rounded-full p-1.5 relative'>
                                    <RiShoppingBag3Line className='text-xl font-light' />
                                    <p className='absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] p-0.5 border border-white'>10</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* search for mobile  */}

                    <div className='flex items-center justify-between gap-3 mt-4 lg:hidden'>
                        <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className='text-4xl text-white'>
                            <CgMenuGridO />
                        </button>
                        <div className='flex items-center justify-center w-full'>
                            <div className='bg-white w-full flex items-center rounded-full px-4'>
                                <input className='w-full py-2 pr-3 outline-none rounded-full placeholder:text-sm' placeholder='Search for products..' type="text" name="" id="" />
                                <IoIosSearch className='text-2xl' />
                            </div>
                        </div>
                    </div>
                    <MobileNav
                        open={mobileNavOpen}
                        setOpen={setMobileNavOpen}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;