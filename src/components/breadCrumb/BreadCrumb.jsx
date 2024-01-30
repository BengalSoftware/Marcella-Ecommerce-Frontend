import Link from 'next/link';
import React from 'react';
import { IoHomeSharp } from "react-icons/io5";

const BreadCrumb = () => {
    return (
        <div className='flex items-center gap-2 text-sm mb-5'>
            <Link href='/' className='hover:text-primary text-dark'><IoHomeSharp /></Link>
            <Link href='/' className='hover:text-primary text-dark'> / Products</Link>
            <Link href='/' className='hover:text-primary text-dark'> / Nova Automatic Cordless Stainless</Link>
        </div>
    );
};

export default BreadCrumb;