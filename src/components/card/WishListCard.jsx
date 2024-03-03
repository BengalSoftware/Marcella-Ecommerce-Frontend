'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { addToCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

const WishListCard = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { setCartSuccess, setCartDrawerOpen } = useContext(StateContext)
    const [cartLoading, setCartLoading] = useState(false);
    const { name, images, altTag, _id, sellerId, offerPrice } = product?.product || {};

    const handelAddToCart = async () => {
        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: _id,
                sellerId,
                offerPrice,
            };
        } else {
            toast.error('Please Signin Your Account')
        }
        try {
            setCartLoading(true)
            const res = await addToCartDataByEmail(user?.data?.user?.email, data);
            if (res) {
                toast.success('Cart Added Successfull')
                setCartSuccess(true)
                setCartDrawerOpen(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setCartLoading(false)
        }
    }

    return (
        <div className='bg-white rounded-md shadow flex items-center p-1 relative'>
            <Image className='h-32 w-32' width={500} height={500} src={images?.[0]} quality={100} alt={altTag} />
            <div>
                <p className='line-clamp-2 text-sm'>{name}</p>
                <button onClick={handelAddToCart} className='text-primary uppercase text-sm mt-4'>{cartLoading ? 'Loading..' : 'Add To Cart'}</button>
            </div>
            <button className='text-2xl absolute bottom-4 right-4 text-red-500 hover:text-red-600'><MdDelete /></button>
        </div>
    );
};

export default WishListCard;