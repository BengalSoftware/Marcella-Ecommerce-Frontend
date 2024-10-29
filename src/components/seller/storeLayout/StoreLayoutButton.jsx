'use client'
import React, { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import OneBannerForm from './form/OneBannerForm';
import ShopLayout from '@/components/shop/ShopLayout';

const StoreLayoutButton = () => {
    const [activeButton, setActiveButton] = useState('home')
    return (
        <div>
            <div className='flex items-center justify-between gap-4 my-5'>
                <button onClick={() => setActiveButton('home')} className={`${activeButton === 'home' ? 'bg-dark hover:bg-primary' : 'bg-primary hover:bg-dark'} text-white px-4 py-2 rounded-md flex items-center gap-x-2`}><IoHomeSharp /> Home</button>
                <button onClick={() => setActiveButton('one')} className={`${activeButton === 'one' ? 'bg-dark hover:bg-primary' : 'bg-primary hover:bg-dark'} text-white w-full py-2 rounded-md`}>One Banner</button>
                <button onClick={() => setActiveButton('two')} className={`${activeButton === 'two' ? 'bg-dark hover:bg-primary' : 'bg-primary hover:bg-dark'} text-white w-full py-2 rounded-md`}>Two Banner</button>
                <button onClick={() => setActiveButton('three')} className={`${activeButton === 'three' ? 'bg-dark hover:bg-primary' : 'bg-primary hover:bg-dark'} text-white w-full py-2 rounded-md`}>Three Banner</button>
            </div>
            {
                activeButton === 'home' && <ShopLayout activeButton={activeButton} />
            }
            {
                activeButton === 'one' && <OneBannerForm activeButton={activeButton} />
            }
            {
                activeButton === 'two' && <OneBannerForm activeButton={activeButton} />
            }
            {
                activeButton === 'three' && <OneBannerForm activeButton={activeButton} />
            }
        </div>
    );
};

export default StoreLayoutButton;