'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { userSignupMutation } from '@/lib/authApi/authApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SignupForm = () => {
    const [userLoading, setUserLoading] = useState(false);
    const [userError, setUserError] = useState(false);
    const { setUserLoginSuccess } = useContext(AuthContext);
    const router = useRouter();

    const handleUserSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const emailPhone = e.target.emailPhone.value;
        const password = e.target.password.value;
        const newInfo = {
            name,
            email: emailPhone,
            password
        }

        const userMutation = async () => {
            if (newInfo) {
                try {
                    setUserLoading(true)
                    const response = await userSignupMutation(newInfo);
                    if (response?.data) {
                        setUserLoginSuccess(true);
                        toast.success('Signup Successfull')
                        router.push('/account');
                        localStorage.removeItem('sauth')
                    } else {
                        setUserError(true)
                    }
                } catch (error) {
                    setUserError(true)
                } finally {
                    setUserLoading(false)
                }
            }
        }
        userMutation();
    }


    useEffect(() => {
        if (userError) {
            toast.error('Authentication Failed')
            setUserError(false)
        }
    }, [userError])

    return (
        <form onSubmit={handleUserSignup}>
            <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                placeholder="Enter Name" name='name' type="text" required />
            <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                placeholder="Enter Email or Phone" name='emailPhone' type="text" required />
            <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                placeholder="Password" name='password' type="password" required/>
            <div className="mt-5 flex gap-5">
                <button className="px-6 md:px-8 py-2 bg-primary text-white rounded-full hover:opacity-90">{userLoading ? 'Creating..' : 'Create Account'}</button>
                <Link href="/login"
                    className="px-6 md:px-8 py-2 hover:bg-secondary hover:text-primary rounded-full border border-dotted border-primary hover:opacity-90">Login</Link>
            </div>
        </form>
    );
};

export default SignupForm;