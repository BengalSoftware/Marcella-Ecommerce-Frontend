'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import Preloader from '@/utility/preloader/Preloader';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { isLoading, seller } = useContext(AuthContext);
    const router = useRouter();

    if (isLoading) {
        return (
            <div className='flex items-center justify-center w-full'>
                {/* <Preloader /> */}
                <p className='text-white'>.</p>
            </div>
        )
    }

    useEffect(() => {
        if (!seller?.data?.user?.email) {
            router.push('/seller-signup')
        }
    }, [seller?.data?.user?.email])


    return (
        <div>
            {children}
        </div>
    )
};

export default PrivateRoute;