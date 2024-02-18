import Link from 'next/link';
import React from 'react';
import { IoHomeSharp } from "react-icons/io5";

const BreadCrumb = ({ breadcrumbs }) => {
    return (
        <div className='flex items-center gap-2 text-xs md:text-sm mb-5'>
            <Link href='/' className='hover:text-primary text-dark'><IoHomeSharp /></Link>
            {
                breadcrumbs?.map(bread =>
                    <Link key={bread?.slug} href={`/products?category=${bread?.slug}`} className='hover:text-primary text-dark'> / {bread?.title}</Link>
                )
            }
        </div>
    );
};

export default BreadCrumb;