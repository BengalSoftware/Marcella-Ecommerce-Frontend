'use client'
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Drawer = ({ title, openDrawer, setOpenDrawer, children }) => {

    return (
        <div className={`bg-white z-[999] top-0 border-l shadow fixed p-6 w-full md:w-[28rem] h-full ease-in-out duration-700 delay-75 ${openDrawer ? 'right-0' : '-right-[300rem]'}`}>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-xl font-medium'>{title}</h1>
                <button onClick={() => setOpenDrawer(false)} className='text-xl font-light border border-white hover:border-dark'><AiOutlineClose /></button>
            </div>

            {children}

        </div>
    );
};

export default Drawer;