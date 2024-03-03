'use client'
import WishListCard from '@/components/card/WishListCard';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getWishlistByUserEmail } from '@/lib/wishlistApi/wishListApi';
import UserPrivateRoute from '@/privateRoute/UserPrivateRoute';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { MdHome } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const WishlistPage = () => {
    const [wishProducts, setWishProducts] = useState(null);
    const { user } = useContext(AuthContext);

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
    }, [user?.data?.user?.email])

   

    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-5'>
                <UserPrivateRoute />
                <div className='mx-4 md:mx-0'>
                    <div className='flex items-center gap-2'>
                        <MdHome className='text-primary' />
                        <MdKeyboardDoubleArrowRight className='text-gray-500' />
                        <Link href='' className='text-sm hover:text-primary'>Wishlist</Link>
                    </div>

                    <h1 className='text-dark font-medium text-3xl my-5'>My Wishlist</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        { wishProducts?.length > 0 ?
                            wishProducts?.map(product =>
                                <WishListCard
                                    key={product?._id}
                                    product={product}
                                />
                            ) : 
                            <p className='text-center'>No WIshlist Product Found</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;