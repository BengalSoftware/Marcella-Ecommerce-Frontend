'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const UserPrivateRoute = ({ children }) => {
    const { uIsLoading, user } = useContext(AuthContext);
    const router = useRouter();

    if (uIsLoading) {
        return (
            <div className='flex items-center justify-center h-screen w-full'>
                <h1>Loading...</h1>
            </div>
        )
    }

    useEffect(() => {
        if (!user?.data?.user?.email) {
            router.push('/login')
        }
    }, [user?.data?.user?.email])
    

    return (
        <div>
            {children}
        </div>
    )
};

export default UserPrivateRoute;