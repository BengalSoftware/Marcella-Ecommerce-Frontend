'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getActiveSingleAddress } from '@/lib/addressApi/addressApi';
import { getSingleSellerById } from '@/lib/sellerApi/sellerApi';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { CiDiscount1 } from 'react-icons/ci';
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";

const ProductDeliveryInfo = ({ product }) => {
    const [sellerInfo, setSellerInfo] = useState(null);
    const [address, setAddress] = useState(null)
    const { user } = useContext(AuthContext);
    const { sellerId } = product || {};

    useEffect(() => {
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getActiveSingleAddress(user?.data?.user?.email);
                if (data) {
                    setAddress(data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [user?.data?.user?.email])


    const handleVisitStore = () => {
        localStorage.setItem('sci', JSON.stringify(sellerId))
    }

    return (
        <div>
            <h1 className='text-dark text-xl'>Delivery Info</h1>

            <div className='text-dark flex items-start text-sm mt-4 gap-2'>
                <FaLocationDot className='mt-1' />
                {
                    address?.data?.address ?
                        <p className='w-11/12 text-sm'>{address?.data?.address}</p> :
                        <p>No Address Found</p>
                }
            </div>
            <div className='text-dark flex items-center text-sm mt-5 lg:mt-10 gap-2'>
                <GrDeliver />
                <p>Delivery Charge</p>
            </div>
            {
                product?.freeShipping === true ?
                    <p className='text-dark text-sm pl-6 mt-2 flex items-center gap-1'> Free <CiDiscount1 className='text-lg text-primary' /></p> :
                    <>
                        <div className='flex items-center justify-between ml-6 mt-2'>
                            <p className='text-sm text-dark'>Inside Dhaka</p>
                            <p className='text-primary font-[auto]'>60 ৳</p>
                        </div>
                        <div className='flex items-center justify-between ml-6 mt-2'>
                            <p className='text-sm text-dark'>Outside Dhaka</p>
                            <p className='text-primary font-[auto]'>100 ৳</p>
                        </div>
                    </>
            }
            <div className='text-dark flex items-center text-sm mt-5 lg:mt-10 gap-2'>
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
                {/* <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-dark'>Product Seller Ratings</p>
                        <p className='text-2xl'>85%</p>
                    </div>
                    <div>
                        <p className='text-sm text-dark'>Ship on Time</p>
                        <p className='text-2xl'>100%</p>
                    </div>
                </div> */}
                <div className='text-center mt-2'>
                    {
                        sellerInfo ? <Link onClick={handleVisitStore} href={`/shop/${sellerInfo?.data?.slug}`} className='text-primary text-xs uppercase hover:underline'>Visit Store</Link> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDeliveryInfo;