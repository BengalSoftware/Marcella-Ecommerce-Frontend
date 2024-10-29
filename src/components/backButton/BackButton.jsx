'use client'
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {

    const handleBack = () => {
        window.history.back();
    }

    return (
        <button onClick={handleBack} className='bg-black text-white text-sm font-light px-2 py-1 rounded flex items-center hover:bg-dark'><IoIosArrowBack />Back</button>
    );
};

export default BackButton;