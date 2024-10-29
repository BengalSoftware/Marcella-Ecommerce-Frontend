'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { addWishlistProductByEmail, getWishlistByUserEmail } from '@/lib/wishlistApi/wishListApi';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoShareSocial } from "react-icons/io5";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const WishlistButtonAndShare = ({ product }) => {
    const [socialShare, setSocailShare] = useState(false);
    const [wishProducts, setWishProducts] = useState(null);
    const { user } = useContext(AuthContext)
    const { wishlistSuccess, setWishlistSuccess } = useContext(StateContext)
    const pathname = usePathname();
    const outsideRef = useRef();
    const isExist = wishProducts?.find(wishProduct => wishProduct?.product?._id === product?._id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getWishlistByUserEmail(user?.data?.user?.email);
                if (res) {
                    setWishProducts(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
        if (wishlistSuccess) {
            fetchData();
            setWishlistSuccess(false)
        }
    }, [user?.data?.user?.email, wishlistSuccess])




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



    // outside click 
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!outsideRef.current?.contains(e.target)) {
                setSocailShare(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, []);

    return (
        <div className='relative'>
            <div className='flex items-center gap-4'>
                <button onClick={() => setSocailShare(!socialShare)} className='text-3xl text-gray-400'>
                    <IoShareSocial />
                </button>
                <button onClick={handleAddToWishlist} className='text-3xl'>
                    {isExist ? <FaHeart className='text-red-500' /> : <FaRegHeart className='text-gray-400' />}
                </button>
            </div>

            <div ref={outsideRef} className={`bg-secondary px-10 py-3 absolute right-0 mt-4 rounded-md shadow-md border ${socialShare ? 'block' : 'hidden'}`}>
                <div className='relative'>
                    <IoMdArrowDropup className='text-4xl absolute bottom-full right-0 text-primary' />
                    <div className='flex items-center gap-4'>
                        <FacebookShareButton url={`https://veendeshi.com${pathname}`} imageUrl={product?.images?.[0]}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <TwitterShareButton url={`https://veendeshi.com${pathname}`} imageUrl={product?.images?.[0]}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={`https://veendeshi.com${pathname}`} imageUrl={product?.images?.[0]}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistButtonAndShare;