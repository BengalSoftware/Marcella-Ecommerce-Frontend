'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const OrderSummary = ({ cartData }) => {
    const [payment, setPayment] = useState('');
    const { subtotal, total, shippingCharge } = cartData || {};

    const handlePayment = async () => {
        if (!payment) {
            toast.error('Please Select Payment Method')
        }
        // else if (payment === 'COD') {
        //     const modifiedData = {
        //         paymentType: payment,
        //         totalAmount: total,
        //         shippingCharge: shippingCharge,
        //         status: 'pending',
        //         discountAmount: discountAmount,
        //     }
        //     if (modifiedData) {
        //         if (response) {
        //             toast.success('Order Successfull')
        //         }
        //     }
        // }
    }

    return (
        <div className='bg-white p-4 rounded-lg shadow'>
            <h1 className='text-xl font-medium'>Order Summary</h1>
            <div className='mt-10'>
                <div className='flex items-center justify-between py-3 border-b'>
                    <p>Sub Total</p>
                    <p><span>৳</span> {subtotal}</p>
                </div>
                <div className='flex items-center justify-between py-3 border-b'>
                    <p>Delivery Fee</p>
                    <p><span>৳</span> {shippingCharge}</p>
                </div>

                <div className='flex items-center justify-between py-3 border-b'>
                    <p>Total</p>
                    <p><span>৳</span> {total}</p>
                </div>
            </div>
            <div className='mt-4'>
                <p className='text-sm text-dark'>Have a coupon code ?</p>
                <div className='border rounded-md flex items-center mt-2'>
                    <input className='rounded-md outline-none p-2 placeholder:text-sm w-full' type="text" placeholder='Enter Coupon Code' />
                    <button className='bg-primary px-6 py-2 text-white rounded-r-md hover:bg-dark'>Apply</button>
                </div>
            </div>

            <div className='py-4 font-semibold text-sm flex justify-between my-5 md:my-10 items-center gap-2'>
                <label htmlFor="cash-on" className={`${payment === 'COD' ? 'bg-primary text-white' : 'bg-white'} cursor-pointer text-xs md:text-sm border-primary border py-1 px-2 rounded-md w-1/2 text-center`}>
                    Cash On Delivery
                </label>
                <input onChange={(e) => setPayment(e.target.value)} type="radio" id="cash-on" value='COD' name="paymentMethod" className="focus:ring-0 hidden" />

                <label htmlFor="online" className={`${payment === 'SSLCOMMERZ' ? 'bg-primary text-white' : 'bg-white'} cursor-pointer text-xs md:text-sm border-primary border py-1 px-2 rounded-md w-1/2 text-center`}>
                    Pay Now
                </label>
                <input onChange={(e) => setPayment(e.target.value)} type="radio" id="online" value='SSLCOMMERZ' name="paymentMethod" className="focus:ring-0 hidden" />
            </div>
            <div className='mt-4 flex items-center justify-center'>
                <button onClick={handlePayment} className='bg-primary w-full py-2 text-white rounded-md hover:bg-dark'>Place Order</button>
            </div>
        </div>
    );
};

export default OrderSummary;