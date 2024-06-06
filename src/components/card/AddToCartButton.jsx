'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { addToCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import { addWishlistProductByEmail } from '@/lib/wishlistApi/wishListApi';
import Image from 'next/image';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import discountSvg from '../../../public/assets/discount.svg'

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
        <div>
            {
                product?.price === product?.offerPrice ? '' :
                    <div className='absolute -right-5 md:-right-3 top-2 flex items-center justify-center'>
                        <Image src={discountSvg} height={100} width={100} className='h-12 md:h-16 relative' />
                        <p className='absolute text-white text-[10px] md:text-xs text-center font-bold'>TK <br /> {Math.round(((product?.price - product?.offerPrice) / product?.price) * 100)} Off</p>
                    </div>
            }
            <div className={`${product?.price === product?.offerPrice ? 'top-5' : 'top-20'} absolute right-5 opacity-0 group-hover:opacity-100 flex flex-col gap-y-2`}>
                <button onClick={handleAddToWishlist} className='bg-primary p-2 rounded-full'> <FaRegHeart className='text-white md:text-lg' /></button>
                <button disabled={product?.status === 'OUT-OF-STOCK'} onClick={handelAddToCart} className={`${(product?.status === 'OUT-OF-STOCK') ? 'cursor-not-allowed bg-primary opacity-50' : 'bg-primary'} p-2 rounded-full`}> <FiShoppingBag className='text-white md:text-lg' /></button>
            </div>
        </div>
    );
};

export default AddToCartButton;