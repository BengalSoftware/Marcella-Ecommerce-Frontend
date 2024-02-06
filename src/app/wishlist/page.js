import WishListCard from '@/components/card/WishListCard';
import Link from 'next/link';
import React from 'react';
import { MdHome } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const WishlistPage = () => {
    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0'>
                    <div className='flex items-center gap-2'>
                        <MdHome className='text-primary' />
                        <MdKeyboardDoubleArrowRight className='text-gray-500' />
                        <Link href='' className='text-sm hover:text-primary'>Wishlist</Link>
                    </div>

                    <h1 className='text-dark font-medium text-3xl my-5'>My Wishlist</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        {
                            Array(6).fill().map((_, idx) =>
                                <WishListCard
                                    key={idx}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;