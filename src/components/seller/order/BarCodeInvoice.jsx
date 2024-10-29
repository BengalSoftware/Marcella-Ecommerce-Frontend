'use client'
import { QRCode } from 'antd';
import JsBarcode from 'jsbarcode';
import React, { useEffect, useRef } from 'react';

const BarCodeInvoice = ({ printRef, sellerInfo, singleOrder }) => {
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
    }, [orderId]);


    return (
        <div ref={printRef} className='border border-black w-1/2 mt-10'>
            <div className='grid grid-cols-3'>
                <h1 className='uppercase text-primary text-3xl font-semibold border-r border-r-black p-1 text-center w-full'>Veendeshi</h1>
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
                <div className='w-full border-l border-l-black'>
                    <div className='border-b border-b-black pl-3 py-3'>
                        <p className='text-black text-xs pb-1'><span className='font-medium'>Recipient:</span> {address?.shippingName}</p>
                        <p className='text-black text-xs pb-1'>{address?.address}</p>
                        <p className='text-black text-xs pb-1'>{address?.shippingPhone}</p>
                    </div>
                    <div className='pl-3 py-3'>
                        <p className='text-black text-xs pb-1'><span className='font-medium'>Seller:</span> {sellerInfo?.name}</p>
                        <p className='text-black text-xs pb-1'>{sellerInfo?.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarCodeInvoice;