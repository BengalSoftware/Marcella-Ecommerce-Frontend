'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { seller } = useContext(AuthContext);
    const router = useRouter();


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