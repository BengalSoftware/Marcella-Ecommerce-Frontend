'use client'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import avatar from '../../../../public/assets/avatar.png'
import Link from 'next/link';
import { BsPersonGear } from 'react-icons/bs';
import { CiMoneyBill } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { TbLocationPin, TbShoppingCartCancel, TbTruckReturn } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getSingelUser } from '@/lib/accountApi/accountApi';
import { StateContext } from '@/context/stateProvider/StateProvider';


const AccountSidebar = () => {
    const pathname = usePathname();
    const [userData, setUserData] = useState(null);
    const { user } = useContext(AuthContext);
    const { profileSuccess, setProfileSuccess } = useContext(StateContext)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingelUser(user?.data?.user?.email);
                if (res) {
                    setUserData(res?.data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();

        if (profileSuccess) {
            fetchData();
            setProfileSuccess(false)
        }
    }, [user?.data?.user?.email, profileSuccess])

    return (
        <div className='rounded-lg bg-white'>
            <div className='bg-primary rounded-t-lg flex flex-col items-center py-10'>
                <Image className='rounded-full h-20 w-20' src={avatar} alt='seller' quality={100} placeholder='blur' />
                <p className='text-white font-semibold capitalize mt-2'>{userData?.name}</p>
                <p className='text-gray-200 font-light text-sm mt-1'>{userData?.email}</p>
            </div>

            {/* menu bar  */}
            <ul className='p-5'>
                <li><Link href='/account' className={`hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4 ${(pathname === '/account') && 'bg-secondary rounded'}`}><IoHomeOutline /> My Account</Link></li>
                <li><Link href='/account/order' className={`hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4 ${(pathname === '/account/order') && 'bg-secondary rounded'}`}><CiMoneyBill /> My Orders</Link></li>
                <li><Link href='/account/cancel' className={`hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4 ${(pathname === '/account/cancel') && 'bg-secondary rounded'}`}><TbShoppingCartCancel /> My Cancellations</Link></li>
                <li><Link href='/account/return' className={`hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4 ${(pathname === '/account/return') && 'bg-secondary rounded'}`}><TbTruckReturn /> My Returns</Link></li>
                <li><Link href='/account/reviews' className={`hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4 ${(pathname === '/account/reviews') && 'bg-secondary rounded'}`}><MdOutlineReviews /> Reviews</Link></li>
                <li><Link href='/account/address' className={`hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4 ${(pathname === '/account/address') && 'bg-secondary rounded'}`}><TbLocationPin /> Address</Link></li>
                <li><Link href='/account/settings' className={`hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4 ${(pathname === '/account/settings') && 'bg-secondary rounded'}`}><BsPersonGear /> Settings</Link></li>
            </ul>
        </div>
    );
};

export default AccountSidebar;