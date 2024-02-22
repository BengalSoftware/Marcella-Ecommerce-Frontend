'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { isLoading, seller } = useContext(AuthContext);
    const router = useRouter();

    if (isLoading) {
        return (
            <div className='flex items-center justify-center h-screen w-full'>
                <h1>Loading...</h1>
            </div>
        )
    }

    useEffect(() => {
        if (!seller?.data?.user?.email) {
            router.push('/seller-signup')
        }
    }, [seller?.data?.user?.email])
    console.log(seller?.data?.user?.email)

    return (
        <div>
            {children}
        </div>
    )
};

export default PrivateRoute;