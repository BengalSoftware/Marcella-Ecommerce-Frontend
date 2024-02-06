import Link from 'next/link';
import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";

const ProductDeliveryInfo = () => {
    return (
        <div>
            <h1 className='text-dark text-xl'>Delivery Info</h1>

            <div className='text-dark flex items-center text-sm mt-4 gap-2'>
                <FaLocationDot />
                <p>No Address Found</p>
            </div>
            <div className='text-dark flex items-center text-sm mt-10 gap-2'>
                <GrDeliver />
                <p>Delivery Charge</p>
            </div>
            <div className='flex items-center justify-between ml-6 mt-2'>
                <p className='text-sm text-dark'>Inside Dhaka</p>
                <p className='text-primary font-[auto]'>60 ৳</p>
            </div>
            <div className='flex items-center justify-between ml-6 mt-2'>
                <p className='text-sm text-dark'>Outside Dhaka</p>
                <p className='text-primary font-[auto]'>100 ৳</p>
            </div>
            <div className='text-dark flex items-center text-sm mt-10 gap-2'>
                <GiReceiveMoney />
                <p>Cash on delivery available</p>
            </div>


            <div className='mt-5'>
                <p className='text-dark text-sm mb-2'>Service</p>
                <div className='text-dark flex items-start text-sm gap-2'>
                    <FaRegClock className='mt-1' />
                    <div>
                        <p className='font-medium'>7 Days Returns</p>
                        <p className='text-xs'>Change of mind is not applicable</p>
                    </div>
                </div>
                <div className='text-dark flex items-center mt-4 text-sm gap-2'>
                    <IoWarningOutline />
                    <p>Warranty not available</p>
                </div>
            </div>

            <div className='mt-5'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-dark'>Product Seller Ratings</p>
                        <p className='text-2xl'>85%</p>
                    </div>
                    <div>
                        <p className='text-sm text-dark'>Ship on Time</p>
                        <p className='text-2xl'>100%</p>
                    </div>
                </div>
                <div className='text-center mt-2'>
                    <Link href='/shop/bengal-shop' className='text-primary'>Visit Store</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDeliveryInfo;