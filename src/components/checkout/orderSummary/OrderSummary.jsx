'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { placeSingleOrderByEmail } from '@/lib/addToCartApi/addToCartApi';
import { addCouponMutation } from '@/lib/couponApi/couponApi';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const OrderSummary = ({ cartData }) => {
    const [payment, setPayment] = useState('');
    const [coupon, setCoupon] = useState('');
    const { subtotal, total, shippingCharge, discountAmount } = cartData || {};
    const { user } = useContext(AuthContext);
    const { setCartSuccess } = useContext(StateContext);
    const [isLoading, setIsLoading] = useState(false);
    const [couponError, setCouponError] = useState(false);
    const [couponSuccess, setCouponSuccess] = useState(false);
    const router = useRouter()

    const handlePayment = async () => {
        if (!payment) {
            toast.error('Please Select Payment Method')
        }
        else if (payment === 'COD') {
            const modifiedData = {
                paymentType: payment,
                totalAmount: total,
                subTotal: subtotal,
                shippingCharge: shippingCharge,
                status: 'pending',
                discountAmount: discountAmount,
            }
            try {
                setIsLoading(true)
                if (modifiedData && user?.data?.user?.email) {
                    const response = await placeSingleOrderByEmail(user?.data?.user?.email, modifiedData)
                    console.log(response)
                    if (response) {
                        toast.success('Order Successfull')
                        setCartSuccess(true)
                        router.push('/account/order')
                    }
                }
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
    }



    // handle coupon 
    const handleCouponCode = async (e) => {
        e.preventDefault();
        try {
            const data = await addCouponMutation({ cartId: cartData?.cartData?._id, couponCode: coupon, email: user?.data?.user?.email })
            if (data) {
                setCouponSuccess(true)
            }

        } catch (error) {
            setCouponError(true)
        }
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
            <div className='mt-2 w-full'>
                <label className='text-sm text-dark'>Have a coupon code ?</label>
                <form onSubmit={handleCouponCode} className="border rounded-md flex items-center mt-2">
                    <input onChange={(e) => setCoupon(e.target.value)} className="rounded-md outline-none p-2 placeholder:text-sm w-full" type="text" name="coupon" placeholder="Enter Coupon Code" />
                    <button className="bg-primary px-6 py-2 text-white rounded-r-md hover:bg-dark cursor-pointer">Apply</button>
                </form>
                {
                    couponSuccess && <p className='text-center text-green-600 mt-3'>{couponSuccess ? 'Succesfully' : 'Already Used'}</p>
                }
                {
                    couponError && <p className='text-center text-red-600 mt-3'>Coupon is invalid!</p>
                }
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
                <button onClick={handlePayment} className='bg-primary w-full py-2 text-white rounded-md hover:bg-dark'>{isLoading ? 'Loading..' : 'Place Order'}</button>
            </div>
        </div>
    );
};

export default OrderSummary;