'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { addToCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

const AddToCartButton = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { setCartSuccess, setCartDrawerOpen } = useContext(StateContext)

    const handelAddToCart = async () => {
        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: product?._id,
                offerPrice: product?.offerPrice,
            };
        } else {
            toast.error('Please Signin Your Account')
        }
        try {
            const res = await addToCartDataByEmail(user?.data?.user?.email, data);
            if (res) {
                toast.success('Cart Added Successfull')
                setCartSuccess(true)
                setCartDrawerOpen(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='absolute top-5 right-2 flex flex-col gap-y-3 opacity-0 group-hover:opacity-100'>
            <button className='bg-primary p-2 rounded-full'> <FaRegHeart className='text-white md:text-lg' /></button>
            <button onClick={handelAddToCart} className='bg-primary p-2 rounded-full'> <FiShoppingBag className='text-white md:text-lg' /></button>
        </div>
    );
};

export default AddToCartButton;