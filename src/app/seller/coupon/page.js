import CouponTable from '@/components/seller/coupon/CouponTable';
import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const CouponPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <Link href='/seller/add-coupon' className='bg-dark hover:bg-primary text-white px-4 py-2 rounded-md'>Add Coupon +</Link>
                <div className='bg-white flex items-center rounded border border-primary pr-2'>
                    <input className='p-2 rounded outline-none border-r mr-2' type='text' placeholder='Search' />
                    <IoIosSearch className='text-2xl' />
                </div>
            </div>
            <CouponTable />
        </div>
    );
};

export default CouponPage;