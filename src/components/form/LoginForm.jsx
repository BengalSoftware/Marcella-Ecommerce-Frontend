'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { userLoggedIn } from '@/lib/authApi/authApi';
import { Alert } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(null);
    const { setUserLoginSuccess, setSellerLoginSuccess } = useContext(AuthContext);
    const router = useRouter();

    let response;

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPhone = e.target.emailPhone.value;
        const password = e.target.password.value;

        const getLoginInfo = {
            email: emailPhone,
            password
        }

        const userMutation = async () => {
            if (getLoginInfo) {
                try {
                    setIsLoading(true);
                    response = await userLoggedIn(getLoginInfo);
                    if (response?.data?.user?.role === 'seller') {
                        setSellerLoginSuccess(true);
                        toast.success('Login Successfull');
                        router.push('/seller');
                        localStorage.removeItem('uauth')
                    } else if (response?.data?.user?.role === 'user') {
                        setUserLoginSuccess(true);
                        toast.success('Login Successfull');
                        router.push('/account');
                        localStorage.removeItem('sauth')
                    }
                    else {
                        setIsError(true)
                    }
                } catch (error) {
                    setIsError(true)
                } finally {
                    setIsLoading(false);
                }
            }
        };

        userMutation();

        // e.target.reset()

    }

    const onClose = (e) => {
        setIsError(false)
    };

    return (
        <div className='pb-4'>
            {
                error &&
                <Alert
                    description="Authorizaton Failed Check phone or password"
                    type="error"
                    closable
                    onClose={onClose}
                    className='mt-4'
                />
            }
            <form onSubmit={handleSubmit}>
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-8"
                    placeholder="Enter Email or Phone" name='emailPhone' type="text" />
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                    placeholder="Password" name='password' type="password" />

                <button className="text-dark font-[300] text-sm pl-2 mt-5 hover:text-primary" type="button">Forgot
                    password ?</button>

                <div className="mt-5 flex gap-5">
                    <button className="px-6 md:px-8 py-2 bg-primary text-white rounded-full hover:opacity-90">{isLoading ? 'Login..' : 'Login'}</button>
                    <Link href="/signup"
                        className="px-6 md:px-8 py-2 hover:bg-secondary hover:text-primary rounded-full border border-dotted border-primary hover:opacity-90">Create
                        Account</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;