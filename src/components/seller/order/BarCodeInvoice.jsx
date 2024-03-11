'use client'
import { QRCode } from 'antd';
import JsBarcode from 'jsbarcode';
import React, { useEffect, useRef } from 'react';

const BarCodeInvoice = ({ singleOrder }) => {
    const { address, createdAt, orderId } = singleOrder?.result || {};
    const ref = useRef()


    useEffect(() => {
        if (ref.current) {
            JsBarcode(ref.current, orderId, {
                format: 'CODE128',
                displayValue: true,
                fontSize: 12,
                width: 3,
                height: 120
            });
        }
    }, ['value']);


    return (
        <div className='border border-black w-1/2 mt-10'>
            <div className='grid grid-cols-3'>
                <h1 className='uppercase text-primary text-3xl font-semibold border-r border-r-black p-1 text-center w-full'>Marcella</h1>
                <div className='border-r border-r-black p-1'>
                    <p className='text-[10px] text-center text-black'>Order Id</p>
                    <p className='text-center text-black text-xs'>{orderId}</p>
                </div>
                <div className='p-1'>
                    <p className='text-[10px] text-center'>Date</p>
                    <p className='text-center text-xs'>{new Date(createdAt).toDateString()}</p>
                </div>
            </div>
            <div className='flex justify-center items-center border-y border-y-black'>
                <svg ref={ref}></svg>
            </div>

            <div className='flex'>
                <div className='flex items-center justify-center'>
                    <QRCode
                        value={address?.address}
                    />
                </div>
                <div className='col-span-2 border-l border-l-black'>
                    <p className='text-black text-xs border-b border-b-black pl-3 py-3'>Recipient: {address?.address}</p>
                    <p className='text-black text-xs pl-3 py-3'>Seller: {address?.address}</p>
                </div>
            </div>
        </div>
    );
};

export default BarCodeInvoice;