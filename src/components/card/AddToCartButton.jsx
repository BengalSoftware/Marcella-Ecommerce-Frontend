'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { addToCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import { addWishlistProductByEmail } from '@/lib/wishlistApi/wishListApi';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

const AddToCartButton = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { setCartSuccess, setCartDrawerOpen, setWishlistSuccess, productQty } = useContext(StateContext)
    // const { setCartSuccess, productQty, setProductQty } = useContext(StateContext)

    const handelAddToCart = async () => {
        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: product?._id,
                sellerId: product?.sellerId,
                offerPrice: product?.offerPrice,
                quantity: productQty
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


    const handleAddToWishlist = async () => {
        const data = { product: product?._id }
        try {
            if (user?.data?.user?.email) {
                const res = await addWishlistProductByEmail(user?.data?.user?.email, data);
                if (res) {
                    toast.success('Wishlist Added Successfull')
                    setWishlistSuccess(true)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='absolute top-5 right-2 flex flex-col gap-y-3 opacity-0 group-hover:opacity-100'>
            <button onClick={handleAddToWishlist} className='bg-primary p-2 rounded-full'> <FaRegHeart className='text-white md:text-lg' /></button>
            <button onClick={handelAddToCart} className='bg-primary p-2 rounded-full'> <FiShoppingBag className='text-white md:text-lg' /></button>
        </div>
    );
};

export default AddToCartButton;