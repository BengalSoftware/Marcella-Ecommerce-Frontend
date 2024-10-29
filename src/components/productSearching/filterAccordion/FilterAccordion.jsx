'use client'
import { useState } from 'react';
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSmall } from "react-icons/hi2";

const FilterAccordion = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='my-2 mx-3 md:mx-0'>
            <button
                type='button'
                className={`bg-white shadow-md rounded-t-lg font-[400] text-start flex items-center justify-between p-3 cursor-pointer group w-full text-gray-800 border-0 ${isOpen ? 'rounded-b-none' : 'rounded-b-lg'}`}
                onClick={toggleAccordion}
            >
                <p className='font-semibold'>{title}</p>
                {
                    isOpen ? <HiOutlineMinusSmall className='text-2xl' /> : <BsPlus className='text-2xl' />
                }
            </button>
            <div
                className={`bg-white shadow-md overflow-hidden ${isOpen ? 'h-fit overflow-visible rounded-b-lg duration-500 ease-in delay-75' : 'h-0'
                    }`}
            >
                {children}
            </div>
        </div>
    );
};

export default FilterAccordion;