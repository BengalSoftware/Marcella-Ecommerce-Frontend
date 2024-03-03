'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { addToCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import { deleteWishlistProductByEmail } from '@/lib/wishlistApi/wishListApi';
import DeleteLoader from '@/utility/deleteLoader/DeleteLoader';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

const WishListCard = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { setCartSuccess, setCartDrawerOpen, setWishlistSuccess } = useContext(StateContext)
    const [cartLoading, setCartLoading] = useState(false);
    const [dLoading, setDLoading] = useState(false);
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



    // handle wishlist delete 
    const handleDeleteWishlist = async () => {
        const data = { productId: _id }
        try {
            setDLoading(true)
            if (user?.data?.user?.email) {
                const res = await deleteWishlistProductByEmail(user?.data?.user?.email, data);
                if (res) {
                    toast.success('Wishlist Delete Successfull')
                    setWishlistSuccess(true)
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            setDLoading(false)
        }
    }

    return (
        <div className='bg-white rounded-md shadow flex items-center p-1 relative'>
            <Image className='h-32 w-32' width={500} height={500} src={images?.[0]} quality={100} alt={altTag} />
            <div>
                <p className='line-clamp-2 text-sm'>{name}</p>
                <button onClick={handelAddToCart} className='text-primary uppercase text-sm mt-4'>{cartLoading ? 'Loading..' : 'Add To Cart'}</button>
            </div>
            <button onClick={handleDeleteWishlist} className='text-2xl absolute bottom-4 right-4 text-red-500 hover:text-red-600'>{dLoading ? <DeleteLoader /> : <MdDelete />}</button>
        </div>
    );
};

export default WishListCard;