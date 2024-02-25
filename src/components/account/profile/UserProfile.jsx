'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getSingelUser } from '@/lib/accountApi/accountApi';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingelUser(user?.data?.user?.email);
                if (res) {
                    setUserData(res)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [user?.data?.user?.email])



    return (
        <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-white shadow p-4 rounded-lg'>
                <div className='flex items-center justify-between'>
                    <h1>Personal Profile</h1>
                    <Link href='/account/settings' className='text-sm font-medium text-blue-700'>Edit</Link>
                </div>

                <h1 className='text-sm mt-5'>{userData?.data?.name}</h1>
                <p className='text-sm'>{userData?.data?.email}</p>
            </div>

            <div className='md:col-span-2 bg-white shadow p-4 rounded-lg grid grid-cols-1 md:grid-cols-2'>
                <div className='md:border-r pr-5'>
                    <h1 className='uppercase text-dark text-sm'>DEFAULT DELIVERY ADDRESS</h1>
                    <h1 className='text-sm mt-5'>Adnan Hossain</h1>
                    <p className='text-sm'>Sha-87, Satarkul Road, Uttar Badda, Dhaka 1212 Dhaka - Dhaka - North - Badda</p>
                </div>
                <div className='md:pl-5 mt-5 md:mt-0'>
                    <h1 className='uppercase text-dark text-sm'>DEFAULT DELIVERY ADDRESS</h1>
                    <h1 className='text-sm mt-5'>Adnan Hossain</h1>
                    <p className='text-sm'>Sha-87, Satarkul Road, Uttar Badda, Dhaka 1212 Dhaka - Dhaka - North - Badda</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;