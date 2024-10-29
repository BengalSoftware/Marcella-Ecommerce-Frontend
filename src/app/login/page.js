import LoginForm from '@/components/form/LoginForm';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <div className="bg-white shadow-lg rounded-lg p-6 md:w-2/5 mx-auto border-t">
                    <h1 className="text-3xl font-[500] text-dark-100">Log In</h1>
                    <LoginForm />
                    <div className="flex items-center gap-4 md:gap-10 my-10">
                        <hr className="w-full border-b border-gray-200" />
                        <p>or</p>
                        <hr className="w-full border-b border-gray-200" />
                    </div>

                    <span className='flex items-center justify-center gap-2 mt-6'>
                        <button className='border flex items-center gap-2 rounded-md p-2 bg-white shadow' >
                            Sign in with Google
                            <FcGoogle className='text-3xl'/>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;