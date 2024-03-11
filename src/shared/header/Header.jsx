'use client'
import React, { useContext, useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
import { CgMenuGridO } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import MobileNav from '../mobileNav/MobileNav';
import CartDrawer from '@/components/cart/CartDrawer';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { getWishlistByUserEmail } from '@/lib/wishlistApi/wishListApi';
import { FaHeart } from 'react-icons/fa';
import MobileSearchbar from '../mobileSearchbar/MobileSearchbar';
import SearchBar from './SearchBar';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const { user, seller, userLoginSuccess, sellerLoginSuccess, handleLogout } = useContext(AuthContext);
    const [wishProducts, setWishProducts] = useState(null);
    const { wishlistSuccess, setWishlistSuccess } = useContext(StateContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getWishlistByUserEmail(user?.data?.user?.email);
                if (res) {
                    setWishProducts(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
        if (wishlistSuccess) {
            fetchData();
            setWishlistSuccess(false)
        }
    }, [user?.data?.user?.email, wishlistSuccess])


    return (
        <div className='bg-g-primary'>
            <div className="container mx-auto py-4">
                <div className='mx-4 lg:mx-0'>
                    {/* top header start */}
                    <div className='lg:flex items-center justify-between hidden'>
                        <div className='flex items-center justify-end gap-5 text-white mb-5 text-sm'>
                            <Link href='/' className='text-white text-sm border-r border-green-700 pr-4'>Customer Service  </Link>
                            <Link href='' className='border-r pr-4 border-green-700'>Our Address</Link>
                            <p>Call Us On +8801894-961361</p>
                        </div>
                        <div className='flex items-center justify-end gap-5 text-white mb-5 text-sm'>
                            {
                                (!seller?.data?.user?.email) ?
                                    <Link href='/seller-signup' className='text-white text-sm border-r border-green-700 pr-4'>Become a seller</Link> : ''
                            }
                            <Link href='/contact' className='border-r pr-4 border-green-700'>Contact</Link>
                            {
                                (user?.data?.user?.email || userLoginSuccess) ?
                                    <Link href='/account' className='flex items-center gap-2' ><FiUser /> Account</Link> :
                                    <Link href='/login' className={seller?.data?.user?.email || sellerLoginSuccess ? 'hidden' : 'flex items-center gap-2'} ><FiUser /> Account</Link>
                            }
                            {
                                (seller?.data?.user?.email || sellerLoginSuccess) ?
                                    <Link href='/seller' className='flex items-center gap-2' ><FiUser /> Dashboard</Link> : ''
                            }
                            {
                                (user?.data?.user?.email || seller?.data?.user?.email || sellerLoginSuccess || userLoginSuccess) ?
                                    <button onClick={handleLogout} className='flex items-center gap-2' >Logout</button> :
                                    ''
                            }
                        </div>
                    </div>
                    {/* top header end */}
                    <div className='flex items-center justify-between'>
                        <Link href='/' className='w-1/4'>
                            <h1 className='text-3xl lg:text-5xl font-semibold text-white'>MARCELLA</h1>
                        </Link>
                        <div className='w-2/4 hidden lg:flex items-center justify-center'>
                            <SearchBar />
                        </div>
                        <div className='w-1/4'>
                            <div className='flex items-center justify-end gap-6'>
                                {
                                    (user?.data?.user?.email || userLoginSuccess) ?
                                        <Link href='/wishlist' className='bg-white text-xl rounded-full p-1.5 relative'>
                                            {wishProducts?.length > 0 ? <FaHeart className='text-red-500' /> : <CiHeart />}
                                            <p className='absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] p-0.5 border border-white'>{wishProducts?.length}</p>
                                        </Link> :
                                        <Link href='/login' className='bg-white text-xl rounded-full p-1.5'>
                                            <CiHeart />
                                        </Link>
                                }
                                <CartDrawer />
                            </div>
                        </div>
                    </div>

                    {/* search for mobile  */}

                    <div className='flex items-center justify-between gap-3 mt-4 lg:hidden'>
                        <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className='text-4xl text-white'>
                            <CgMenuGridO />
                        </button>
                        {/* <div className='flex items-center justify-center w-full'>
                                <div className='bg-white w-full flex items-center rounded-full px-4'>
                                    <input className='w-full py-2 pr-3 outline-none rounded-full placeholder:text-sm' placeholder='Search for products..' type="text" name="" id="" />
                                    <IoIosSearch className='text-2xl' />
                                </div>
                            </div> */}
                        <MobileSearchbar
                            openDrawer={openDrawer}
                            setOpenDrawer={setOpenDrawer}
                        />
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