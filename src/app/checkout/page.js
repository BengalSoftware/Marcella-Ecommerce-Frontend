'use client'
import CheckoutOutlet from '@/components/checkout/checkoutOutlet/CheckoutOutlet';
import OrderSummary from '@/components/checkout/orderSummary/OrderSummary';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { getCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import { getActiveSingleAddress } from '@/lib/addressApi/addressApi';
import React, { useContext, useEffect, useState } from 'react';

const CartPage = () => {
    const [cartData, setCartData] = useState([]);
    const [activeAddress, setActiveAddress] = useState(null)
    const { user } = useContext(AuthContext)
    const { addressSuccess, cartSuccess, setCartSuccess, setAddressSuccess, setModalOpen, selectSuccess, checkoutSuccess, setCheckoutSuccess } = useContext(StateContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user?.data?.user?.email) {
                    const [cartResponse, addressResponse] = await Promise.all([
                        getCartDataByEmail(user?.data?.user?.email),
                        getActiveSingleAddress(user?.data?.user?.email)
                    ]);
                    setCartData(cartResponse?.data);
                    setActiveAddress(addressResponse?.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()

        if (addressSuccess || selectSuccess || checkoutSuccess) {
            fetchData()
            setAddressSuccess(false)
            setModalOpen(false)
            setCartSuccess(false)
            setCheckoutSuccess(false)
        }

    }, [user?.data?.user?.email, addressSuccess, selectSuccess, checkoutSuccess])



    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='md:col-span-2'>
                        <CheckoutOutlet
                            address={activeAddress}
                            cartData={cartData} />
                    </div>
                    <div className='md:col-span-1'>
                        <OrderSummary cartData={cartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;