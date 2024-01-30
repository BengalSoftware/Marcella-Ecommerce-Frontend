import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";

const ProductDeliveryInfo = () => {
    return (
        <div>
            <h1 className='text-dark text-xl'>Delivery Info</h1>

            <div className='text-dark flex items-center text-sm mt-4 gap-2'>
                <FaLocationDot />
                <p>No Address Found</p>
            </div>
            <div className='text-dark flex items-center text-sm mt-10 gap-2'>
                <GrDeliver />
                <p>Delivery Charge</p>
            </div>
            <div className='flex items-center justify-between ml-6 mt-2'>
                <p className='text-sm text-dark'>Inside Dhaka</p>
                <p className='text-primary font-[auto]'>60 ৳</p>
            </div>
            <div className='flex items-center justify-between ml-6 mt-2'>
                <p className='text-sm text-dark'>Outside Dhaka</p>
                <p className='text-primary font-[auto]'>100 ৳</p>
            </div>
            <div className='text-dark flex items-center text-sm mt-10 gap-2'>
                <GiReceiveMoney />
                <p>Cash on delivery available</p>
            </div>
        </div>
    );
};

export default ProductDeliveryInfo;