'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { sellerSignupMutation } from '@/lib/authApi/authApi';
import PrivateRoute from '@/privateRoute/PrivateRoute';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SellerSignupForm = () => {
    const [sellerLoading, setSellerLoading] = useState(false);
    const [sellerError, setSellerError] = useState(false);
    const router = useRouter();
    const { sellerSuccess, setSellerSuccess } = useContext(AuthContext);

    const handleSellerSignup = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const emailPhone = e.target.emailPhone.value;
        const password = e.target.password.value;
        const newInfo = {
            name,
            email: emailPhone,
            password
        }

        if (newInfo) {
            try {
                setSellerLoading(true)
                const data = await sellerSignupMutation(newInfo);
                if (data) {
                    setSellerSuccess(true)
                } else {
                    setSellerSuccess(false)
                }
            } catch (error) {
                setSellerError(true)
            } finally {
                setSellerLoading(false)
            }
        }
    }


    useEffect(() => {
        if (sellerSuccess) {
            toast.success('Signup Successfull')
            router.push('/seller')
        }
        if (sellerError) {
            toast.error('Authentication Failed')
            setSellerError(false)
        }
    }, [sellerSuccess, sellerError])


    return (
        <div className='bg-white p-10 rounded-3xl'>
            <h1 className='text-center font-medium text-3xl'>Create an Account</h1>
            <p className='text-center text-gray-400 text-sm lg:text-base mt-2'>Welcome! Millions of Marcella users are waiting to buy your product.</p>
            <form onSubmit={handleSellerSignup}>
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                    placeholder="Enter Name" name='name' type="text" />
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                    placeholder="Enter Email or Phone" name='emailPhone' type="text" />
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                    placeholder="Password" name='password' type="password" />
                <div className="mt-5 flex gap-5">
                    <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-dark">Create Account</button>
                </div>
                <p className='mt-4'>Already have an account ? <Link href='/login' className='text-primary hover:underline'>Login</Link></p>
            </form>
            <PrivateRoute />
        </div>
    );
};

export default SellerSignupForm;