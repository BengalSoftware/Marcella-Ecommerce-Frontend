import Link from 'next/link';
import React from 'react';
import { IoHomeSharp } from "react-icons/io5";

const BreadCrumb = ({ breadcrumb }) => {
    return (
        <div className='flex items-center gap-2 text-xs md:text-sm mb-5'>
            <Link href='/' className='hover:text-primary text-dark'><IoHomeSharp /></Link>
            {/* <Link href='/' className='hover:text-primary text-dark'> / Products</Link> */}
            {
                breadcrumb?.map(bread =>
                    console.log(bread)
                )
            }
        </div>
    );
};

export default BreadCrumb;