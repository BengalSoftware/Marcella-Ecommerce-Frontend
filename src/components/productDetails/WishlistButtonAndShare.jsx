'use client'
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoShareSocial } from "react-icons/io5";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const WishlistButtonAndShare = () => {
    const [wish, setWish] = useState(false);
    const [socialShare, setSocailShare] = useState(false);

    const handleWishlist = () => {
        setWish(true)
    }

    const shareUrl = 'https://example.com';
    const title = 'Example Title'
    return (
        <div className='relative'>
            <div className='flex items-center gap-4'>
                <button onClick={() => setSocailShare(!socialShare)} className='text-3xl text-gray-400'>
                    <IoShareSocial />
                </button>
                <button onClick={handleWishlist} className='text-3xl'>
                    {
                        wish ? <FaHeart className='text-red-500' /> : <FaRegHeart className='text-gray-400' />

                    }
                </button>
            </div>

            <div className={`bg-secondary px-10 py-3 absolute right-0 mt-4 rounded-md shadow-md border ${socialShare ? 'block' : 'hidden'}`}>
                <div className='relative'>
                    <IoMdArrowDropup className='text-4xl absolute bottom-full right-0 text-primary' />
                    <div className='flex items-center gap-4'>
                        <FacebookShareButton url={shareUrl} quote={title}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl} title={title}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={shareUrl} title={title}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistButtonAndShare;