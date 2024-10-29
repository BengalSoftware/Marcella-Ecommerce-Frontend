'use client'
import React, { useContext, useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { HiXMark } from "react-icons/hi2";
import CheckoutCard from '../card/CheckoutCard';
import Link from 'next/link';
import { getCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';

const CartDrawer = () => {
    const [cartData, setCartData] = useState([]);
    const { user } = useContext(AuthContext);
    const { cartSuccess, setCartSuccess, cartDrawerOpen, setCartDrawerOpen } = useContext(StateContext);


    const showDrawer = () => {
        setCartDrawerOpen(true);
    };

    const onClose = () => {
        setCartDrawerOpen(false);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user?.data?.user?.email) {
                    const res = await getCartDataByEmail(user?.data?.user?.email);
                    if (res) {
                        setCartData(res?.data)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()

        if (cartSuccess) {
            fetchData();
            setCartSuccess(false)
        }
    }, [user?.data?.user?.email, cartSuccess])
    
    return (
        <div>
            <div className='flex items-center gap-6'>
                <span className='text-white border-x px-4 border-green-700 hidden lg:block text-xs md:text-sm'>
                    <p className='text-center'>Cart</p>
                    <p className='font-medium text-center'>{cartData?.subtotal}</p>
                </span>
                <button onClick={showDrawer} className='bg-white rounded-full p-1.5 relative'>
                    <RiShoppingBag3Line className='text-xl font-light' />
                    <p className='absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] p-0.5 border border-white'>{cartData?.totalQuantity ? cartData?.totalQuantity : 0}</p>
                </button>
            </div>
            <Drawer
                title="Shopping Cart"
                onClose={onClose}
                open={cartDrawerOpen}
                closeIcon={null}
                extra={
                    <button onClick={onClose} className='text-2xl border border-white hover:border-dark'>
                        <HiXMark />
                    </button>
                }
                footer={
                    <div className='flex items-center justify-between gap-2 my-10'>
                        <Link onClick={onClose} href='/checkout' className='bg-primary w-full py-2 text-white text-center hover:text-white rounded-md hover:bg-dark'>Checkout</Link>
                        <Link onClick={onClose} href='/' className='bg-dark w-full py-2 text-white rounded-md text-center hover:text-white hover:bg-primary'>Continue Shopping</Link>
                    </div>
                }
            >
                <div className='mx-4'>
                    {
                        cartData?.cartData?.products?.length > 0 ? cartData?.cartData?.products?.map(product =>

                            <CheckoutCard
                                key={product?._id}
                                product={product}
                                statusCard={true}
                            />
                        ) : <p className='text-center'>No cart data found</p>
                    }
                </div>
            </Drawer>
        </div>
    );
};

export default CartDrawer;