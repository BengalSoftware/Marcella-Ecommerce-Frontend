'use client'
import React, { useState } from 'react';
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";

const MobileSubNavButton = ({ title, children }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <li className='border-b border-b-gray-500 border-opacity-10 py-2'>
                <button onClick={() => setToggle(!toggle)} type='button' className={`flex items-center justify-between w-full text-sm`}>
                    {title}
                    {toggle ? <HiOutlineMinusSmall /> : <GoPlus />}
                </button>
            </li>
            <ul className={`w-full ps-4 ease-in duration-500 transition-transform bg-gray-100 ${toggle ? 'block' : 'hidden'}`}
            >
                {children}
            </ul>
        </>
    );
};

export default MobileSubNavButton;