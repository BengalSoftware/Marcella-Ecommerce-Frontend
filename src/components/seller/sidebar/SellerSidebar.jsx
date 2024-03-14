'use client'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import avatar from '../../../../public/assets/avatar.png'
import Link from 'next/link';
import { AiOutlineLayout, AiOutlineShoppingCart } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { IoFlashOutline, IoHomeOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { VscReport } from "react-icons/vsc";
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowDown, MdOutlineLocalOffer } from 'react-icons/md';
import { BiSolidOffer } from 'react-icons/bi';

const SellerSidebar = () => {
    const [sellerInfo, setSellerInfo] = useState(null)
    const { seller } = useContext(AuthContext);
    const [collapsOpen, setCollapsOpen] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (seller?.data?.user?.email) {
                    const res = await getSingleSeller(seller?.data?.user?.email)
                    if (res) {
                        setSellerInfo(res)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [seller?.data?.user?.email])


    return (
        <div className='rounded-lg bg-white'>
            <div className='bg-primary rounded-t-lg flex flex-col items-center py-10'>
                <Image className='rounded-full h-20 w-20' src={avatar} alt='seller' quality={100} placeholder='blur' />
                <p className='text-white font-semibold capitalize mt-2'>{sellerInfo?.data?.name}</p>
                <p className='text-gray-200 font-light text-sm mt-1'>{sellerInfo?.data?.email}</p>
            </div>

            {/* menu bar  */}
            <ul className='p-5'>
                <li><Link href='/seller' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><IoHomeOutline /> Dashboard</Link></li>
                <li><Link href='/seller/product' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><AiOutlineShoppingCart /> Products</Link></li>
                <li>
                    <button onClick={() => setCollapsOpen(!collapsOpen)} className={`w-full border-b flex items-center justify-start gap-x-4 p-2 hover:bg-secondary cursor-pointer ${collapsOpen && 'bg-secondary'}`}>
                        <IoFlashOutline className='text-xl' />
                        <p className='font-light flex items-center justify-between w-full gap-x-2'>Flash Sale {collapsOpen ? <MdOutlineKeyboardArrowDown /> : <MdKeyboardArrowRight />}</p>
                    </button>
                    <ul className={`${collapsOpen ? 'block bg-secondary pl-4' : 'hidden'}`}>
                        <li><Link href='/seller/add-flashsale' className='hover:bg-white border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><MdOutlineLocalOffer /> Add Flashsale</Link></li>
                        <li><Link href='/seller/flashsale-offer' className='hover:bg-white border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><BiSolidOffer /> Show Offer</Link></li>
                    </ul>
                </li>
                <li><Link href='/seller/order' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><CiMoneyBill /> Orders</Link></li>
                <li><Link href='/seller/report' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><VscReport /> Reports</Link></li>
                <li><Link href='/seller/order-overview' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><AiOutlineDeliveredProcedure /> Order Overview</Link></li>
                <li><Link href='/seller/transaction' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><LiaMoneyCheckSolid /> Transactions</Link></li>
                {/* <li><Link href='/seller/coupon' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><TfiAnnouncement /> Coupon</Link></li> */}
                <li><Link href='/seller/layout-settings' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><AiOutlineLayout /> Layout</Link></li>
                <li><Link href='/seller/settings' className='hover:bg-secondary border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><BsPersonGear /> Settings</Link></li>
            </ul>
        </div>
    );
};

export default SellerSidebar;