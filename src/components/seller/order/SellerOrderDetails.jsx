'use client'
import React from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { BsCash } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const SellerOrderDetails = ({ singleOrder }) => {
    const { address, createdAt, orderId, products, shippingCharge, status, totalAmount, updatedAt } = singleOrder?.result || {};
    console.log(singleOrder?.result)
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='border rounded-lg'>
                    <div className='flex items-center gap-x-2 bg-primary text-lg text-white p-2 rounded-t-lg'>
                        <RiShoppingCart2Line />
                        <h1>Order Details</h1>
                    </div>
                    <div className='p-2'>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <GiFamilyHouse />
                            <h1>{orderId}</h1>
                        </div>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <SlCalender />
                            <h1>{new Date(createdAt).toDateString()}</h1>
                        </div>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <BsCash />
                            <h1>{shippingCharge}</h1>
                        </div>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <IoLocationOutline />
                            <h1>{'Badda'}</h1>
                        </div>
                    </div>
                </div>
                <div className='border rounded-lg'>
                    <div className='flex items-center gap-x-2 bg-primary text-lg text-white p-2 rounded-t-lg'>
                        <FaRegUser />
                        <h1>Customer Details</h1>
                    </div>
                    <div className='p-2'>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <FaRegUser />
                            <h1>{address?.shippingName}</h1>
                        </div>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <MdOutlineMail />
                            <h1>{address?.shippingEmail}</h1>
                        </div>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <FaPhoneAlt />
                            <h1>{address?.shippingPhone}</h1>
                        </div>
                        <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                            <IoLocationOutline />
                            <h1>{address?.address}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerOrderDetails;