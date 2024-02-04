import Link from 'next/link';
import React from 'react';

const SellerSignupForm = () => {
    return (
        <div className='bg-white p-10 rounded-3xl'>
            <h1 className='text-center font-medium text-3xl'>Create an Account</h1>
            <p className='text-center text-gray-400 text-sm lg:text-base mt-2'>Welcome! Millions of Marcella users are waiting to buy your product.</p>
            <form>
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                    placeholder="Enter Name" type="text" />
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                    placeholder="Enter Email" type="email" />
                <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                    placeholder="Password" type="password" />
                <div className="mt-5 flex gap-5">
                    <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-dark">Create Account</button>
                </div>
                <p className='mt-4'>Already have an account ? <Link href='/login' className='text-primary hover:underline'>Login</Link></p>
            </form>
        </div>
    );
};

export default SellerSignupForm;