import SellerSignupForm from '@/components/form/seller/signupForm/SellerSignupForm';
import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/shopping.png'

const SellerSignupPage = () => {
    return (
        <div className='bg-[#6dba66]'>
            <div className='container mx-auto'>
                <div className='mx-4 md:mx-0 h-[80vh] flex items-center justify-center'>
                    <div className='w-2/3'>
                        <h1 className='text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white'>Become a Seller with Marcella</h1>
                        <div className='flex items-center justify-start'>
                            <Image src={img} alt='seller' quality={100} placeholder='blur' />
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <SellerSignupForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerSignupPage; 