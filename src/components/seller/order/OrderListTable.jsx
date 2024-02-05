import Link from 'next/link';
import React from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const OrderListTable = () => {
    return (
        <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg">
            <h1 className='p-4'>All Orders</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2 text-sm text-center">SL</th>
                        <th className="border p-2 text-sm text-center">Customer</th>
                        <th className="border p-2 text-sm text-center">Order ID</th>
                        <th className="border p-2 text-sm text-center">Shipping Phone</th>
                        <th className="border p-2 text-sm text-center">Amount</th>
                        <th className="border p-2 text-sm text-center">Payment Method</th>
                        <th className="border p-2 text-sm text-center">Order Date</th>
                        <th className="border p-2 text-sm text-center">Modify Date</th>
                        <th className="border p-2 text-sm text-center">Order Status</th>
                        <th className="border p-2 text-sm text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(5).fill().map((_, idx) =>
                            <tr key={idx}>
                                <td className="border p-2 text-sm text-center">{idx + 1}</td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>Nova Electric Kettly</p></td>
                                <td className="border p-2 text-sm text-center">In Stock</td>
                                <td className="border p-2 text-sm text-center">01772781540</td>
                                <td className="border p-2 text-sm text-center">1200</td>
                                <td className="border p-2 text-sm text-center">COD</td>
                                <td className="border p-2 text-sm text-center">11/02/2024</td>
                                <td className="border p-2 text-sm text-center">11/02/2024</td>
                                <td className="border p-2 text-sm text-center">
                                    <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-sm'>
                                        <option value="">Pending</option>
                                        <option value="">Confirmed</option>
                                        <option value="">Delivery</option>
                                    </select>
                                </td>
                                <td className="border p-2 text-sm text-center">
                                    <div className='flex items-center justify-center'>
                                        <Link href='/' className='rounded-l bg-blue-500 hover:bg-blue-600 text-white text-xl p-1'><BiSolidPencil /></Link>
                                        <Link href='/' className='bg-green-500 hover:bg-green-600 text-white text-xl p-1'><IoEye /></Link>
                                        <button className='rounded-r bg-red-500 hover:bg-red-600 text-white text-xl p-1'>
                                            <MdDelete />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderListTable;