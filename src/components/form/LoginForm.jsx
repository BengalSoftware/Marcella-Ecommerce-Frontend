import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                placeholder="Enter Email" type="email" />
            <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10"
                placeholder="Password" type="password" />

            <button className="text-dark font-[300] text-sm pl-2 mt-5 hover:text-primary" type="button">Forgot
                password ?</button>

            <div className="mt-5 flex gap-5">
                <button className="px-6 md:px-8 py-2 bg-primary text-white rounded-full hover:opacity-90">Login</button>
                <Link href="/signup"
                    className="px-6 md:px-8 py-2 hover:bg-secondary hover:text-primary rounded-full border border-dotted border-primary hover:opacity-90">Create
                    Account</Link>
            </div>
        </form>
    );
};

export default LoginForm;