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
    const { setSellerLoginSuccess } = useContext(AuthContext);

    const handleSellerSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const emailPhone = e.target.emailPhone.value;
        const password = e.target.password.value;
        const newInfo = {
            name,
            email: emailPhone,
            password
        }

        const sellerMutation = async () => {
            if (newInfo) {
                try {
                    setSellerLoading(true)
                    const response = await sellerSignupMutation(newInfo);
                    if (response?.data) {
                        setSellerLoginSuccess(true)
                        toast.success('Signup Successfull');
                        router.push('/seller');
                    } else {
                        setSellerError(true)
                    }
                } catch (error) {
                    setSellerError(true)
                } finally {
                    setSellerLoading(false)
                }
            }
        }
        sellerMutation();
    }


    useEffect(() => {
        if (sellerError) {
            toast.error('Authentication Failed')
            setSellerError(false)
        }
    }, [sellerError])


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
                    <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-dark">{sellerLoading ? 'Creating..' : 'Create Account'}</button>
                </div>
                <p className='mt-4'>Already have an account ? <Link href='/login' className='text-primary hover:underline'>Login</Link></p>
            </form>
            <PrivateRoute />
        </div>
    );
};

export default SellerSignupForm;