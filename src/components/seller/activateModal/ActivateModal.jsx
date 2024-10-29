'use client'
import React, { useContext, useEffect, useState } from 'react';
import img from '../../../../public/assets/pending.png'
import Image from 'next/image';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import DisableScroll from '@/utility/disableMouseScroll/DisableMouseScroll';

const ActivateModal = () => {
    const { seller } = useContext(AuthContext);
    const [sellerData, setSellerData] = useState(null)
    const [scrollNav, setScrollNav] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingleSeller(seller?.data?.user?.email)
                if (res) {
                    setSellerData(res)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [seller?.data?.user?.email])

    useEffect(() => {
        const navbarBgChange = () => {
            if (window.scrollY >= 1) {
                setScrollNav(true);
            } else {
                setScrollNav(false)
            }
        }

        window.addEventListener('scroll', navbarBgChange);
    }, [])


    return (
        <>
            {/* <DisableScroll /> */}
            <div className={(sellerData?.data?.status === 'pending') ? `flex items-center justify-center fixed h-screen z-50 ${scrollNav ? 'top-0' : 'top-[7.5rem]'} left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.5)] cursor-not-allowed` : 'hidden'}>
                <div className='bg-white lg:w-2/5 xl:w-1/3 z-50 p-10 rounded-md' style={{ overflow: 'hidden' }}>
                    <h3 className='text-center text-xl font-medium'>Your account is currently pending approval.</h3>
                    <p className='text-center my-5'>Our team is diligently reviewing your information. We appreciate your patience and understanding as we work to finalize the verification process.</p>
                    <div className='flex items-center justify-center'>
                        <Image className='h-40 w-40' src={img} alt='pending' quality={100} placeholder='blur' />
                    </div>
                    <p className='text-center text-xl font-medium'>Thank you for choosing our services.</p>
                </div>
            </div>
        </>
    );
};

export default ActivateModal;