'use client'
import React, { useRef } from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { BsCash } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import { FiPrinter } from 'react-icons/fi';
import BarCodeInvoice from './BarCodeInvoice';

const SellerOrderDetails = ({ singleOrder, sellerInfo }) => {
    const { address, createdAt, orderId, products, shippingCharge, status, paymentType, totalAmount, updatedAt } = singleOrder?.result || {};
    const printRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const filterProducts = products?.filter(product => product?.product?.sellerId === sellerInfo?._id)


    const subtotal = filterProducts?.reduce((acc, product) => acc + (product.quantity * product.offerPrice), 0);

    return (
        <div>
            <div ref={printRef} className='pl-4 pt-5 w-full'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='border rounded-lg'>
                        <div className='flex items-center gap-x-2 bg-primary text-lg text-white p-2 rounded-t-lg'>
                            <RiShoppingCart2Line />
                            <h1>Order Details</h1>
                        </div>
                        <div className='p-2'>
                            <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <GiFamilyHouse />
                                <h1>{orderId}</h1>
                            </div>
                            <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <SlCalender />
                                <h1>{new Date(createdAt).toDateString()}</h1>
                            </div>
                            <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <BsCash />
                                <h1>{paymentType}</h1>
                            </div>
                            <div className='flex gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <IoLocationOutline className='mt-1' />
                                <h1>{address?.address}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg'>
                        <div className='flex items-center gap-x-2 bg-primary text-lg text-white p-2 rounded-t-lg'>
                            <FaRegUser />
                            <h1>Customer Details</h1>
                        </div>
                        <div className='p-2'>
                            <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <FaRegUser />
                                <h1>{address?.shippingName}</h1>
                            </div>
                            <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <MdOutlineMail />
                                <h1>{address?.shippingEmail}</h1>
                            </div>
                            <div className='flex items-center gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <FaPhoneAlt />
                                <h1>{address?.shippingPhone}</h1>
                            </div>
                            <div className='flex gap-x-2 text-dark py-0.5 rounded-t-lg'>
                                <IoLocationOutline className='mt-1' />
                                <h1>{address?.address}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='border w-full mt-10'>
                    <thead>
                        <tr>
                            <th class="text-left px-4 py-2 border">SL</th>
                            <th class="text-left px-4 py-2 border">Product</th>
                            <th class="text-left px-4 py-2 border">Color</th>
                            <th class="text-left px-4 py-2 border">Size</th>
                            <th class="text-left px-4 py-2 border">Qty</th>
                            <th class="text-left px-4 py-2 border">Unit Price</th>
                            <th class="text-left px-4 py-2 border">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filterProducts?.map((product, idx) =>
                                <tr>
                                    <td class="text-left px-4 py-2 border">{idx + 1}</td>
                                    <td class="text-left px-4 py-2 border">{product?.product?.name}</td>
                                    <td class="text-left px-4 py-2 border">{'No'}</td>
                                    <td class="text-left px-4 py-2 border">{'No'}</td>
                                    <td class="text-left px-4 py-2 border">{product?.quantity}</td>
                                    <td class="text-left px-4 py-2 border">{product?.offerPrice}</td>
                                    <td class="text-left px-4 py-2 border">{product?.offerPrice * product?.quantity}</td>
                                </tr>
                            )
                        }


                        <tr>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border font-medium">Sub Total</td>
                            <td class="text-left px-4 py-2 border font-medium">{subtotal}</td>
                        </tr>
                        <tr>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border font-medium">Shipping Charge</td>
                            <td class="text-left px-4 py-2 border font-medium">{singleOrder?.result?.shippingCharge}</td>
                        </tr>
                        <tr>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border"></td>
                            <td class="text-left px-4 py-2 border font-medium">Total</td>
                            <td class="text-left px-4 py-2 border font-medium">{subtotal + singleOrder?.result?.shippingCharge}</td>
                        </tr>
                    </tbody>
                </table>
                <BarCodeInvoice
                    sellerInfo={sellerInfo}
                    singleOrder={singleOrder}
                />
            </div>

            <div className='flex items-center justify-end mt-4'>
                <button onClick={handlePrint} className='bg-primary px-4 py-2 text-white font-medium rounded-md flex items-center gap-x-1'>
                    <FiPrinter />
                    Print
                </button>
            </div>
        </div>
    );
};

export default SellerOrderDetails;