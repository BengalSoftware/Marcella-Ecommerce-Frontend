
import SignInWithGoogle from '@/components/form/SignInWithGoogle';
import SignupForm from '@/components/form/SignupForm';
import React from 'react';

const SignupPage = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <div className="bg-white shadow-lg rounded-lg p-6 md:w-2/5 mx-auto border-t">
                    <h1 className="text-3xl font-[500] text-dark-100">Signup</h1>
                    <SignupForm />
                    <div className="flex items-center gap-4 md:gap-10 my-10">
                        <hr className="w-full border-b border-gray-200" />
                        <p>or</p>
                        <hr className="w-full border-b border-gray-200" />
                    </div>
                    <SignInWithGoogle />
                </div>
            </div>
        </div>
    );
};

export default SignupPage;