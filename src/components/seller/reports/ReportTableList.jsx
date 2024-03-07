import Link from 'next/link';
import React from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const ReportTableList = () => {
    return (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <h1 className='p-4'>All Reports</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2 text-sm text-center">SL</th>
                        <th className="border p-2 text-sm text-center">Order ID</th>
                        <th className="border p-2 text-sm text-center">Reason</th>
                        <th className="border p-2 text-sm text-center">Requested For</th>
                        <th className="border p-2 text-sm text-center">Date</th>
                        <th className="border p-2 text-sm text-center">Status</th>
                        <th className="border p-2 text-sm text-center">Description</th>
                        <th className="border p-2 text-sm text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(5).fill().map((_, idx) =>
                            <tr key={idx}>
                                <td className="border p-2 text-sm text-center">{idx + 1}</td>
                                <td className="border p-2 text-sm text-center">#f5f5f5</td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>Duplicate Product</p></td>
                                <td className="border p-2 text-sm text-center">Order Return</td>
                                <td className="border p-2 text-sm text-center">11/02/2024</td>
                                <td className="border p-2 text-sm text-center">
                                    <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-sm'>
                                        <option value="pending">Pending</option>
                                        <option value="cancelled">Cancelled</option>
                                        <option value="confirmed">Confirmed</option>
                                    </select>
                                </td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>Valo na</p></td>
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

export default ReportTableList;