import Image from 'next/image';
import React from 'react';
import avatar from '../../../../public/assets/avatar.png'
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";

const SellerSidebar = () => {
    return (
        <div className='rounded-lg bg-white'>
            <div className='bg-primary rounded-t-lg flex flex-col items-center py-10'>
                <Image className='rounded-full h-20 w-20' src={avatar} alt='seller' quality={100} placeholder='blur' />
                <p className='text-white font-semibold capitalize mt-2'>Bengal Shop</p>
                <p className='text-gray-200 font-light text-sm mt-1'>bengal@gmail.com</p>
            </div>

            {/* menu bar  */}
            <ul className='p-5'>
                <li><Link href='/seller' className='hover:bg-[#f5f5f5] border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><IoHomeOutline /> Dashboard</Link></li>
                <li><Link href='/seller/product' className='hover:bg-[#f5f5f5] border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><AiOutlineShoppingCart /> Products</Link></li>
                <li><Link href='/seller' className='hover:bg-[#f5f5f5] border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><CiMoneyBill /> Order</Link></li>
                <li><Link href='/seller/coupon' className='hover:bg-[#f5f5f5] border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><TfiAnnouncement /> Coupon</Link></li>
                <li><Link href='/seller' className='hover:bg-[#f5f5f5] border-b w-full p-2 hover:rounded flex font-light items-center gap-4'><BsPersonGear /> Settings</Link></li>
            </ul>
        </div>
    );
};

export default SellerSidebar;