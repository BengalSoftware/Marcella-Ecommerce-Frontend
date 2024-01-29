import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Categories = () => {
    return (
        <div className='bg-white rounded-md'>
            <ul className='relative py-2'>
                {
                    Array(10).fill().map((_, idx) =>
                        <li key={idx} className='group'>
                            <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Womens & Girls Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                            {/* sub menu  */}
                            <ul className='absolute left-full bg-white w-full top-0 hidden group-hover:block py-2 h-full z-50'>
                                <li>
                                    <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                </li>
                                <li>
                                    <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                </li>
                                <li>
                                    <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                </li>
                                <li>
                                    <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                </li>
                                {/* sub menu child */}
                                <li className='group/sub'>
                                    <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                    <ul className='absolute left-full bg-white w-full top-0 hidden group-hover/sub:block py-2 h-full'>
                                        <li>
                                            <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                        </li>
                                        <li>
                                            <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                        </li>
                                        <li>
                                            <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                        </li>
                                        <li>
                                            <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                        </li>
                                        <li>
                                            <Link href='/' className='flex items-center justify-between pl-2 py-2 hover:bg-gray-100'> <span>Mens & Fashion</span> <IoIosArrowForward className='text-primary' /></Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Categories;