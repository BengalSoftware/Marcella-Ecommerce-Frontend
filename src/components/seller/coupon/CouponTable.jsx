import Link from 'next/link';
import React from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const CouponTable = () => {
    return (
        <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg">
            <h1 className='p-4'>All Coupon</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-sm text-center">ID</th>
                        <th className="border px-4 py-2 text-sm text-center">Name</th>
                        <th className="border px-4 py-2 text-sm text-center">Code</th>
                        <th className="border px-4 py-2 text-sm text-center">Discount</th>
                        <th className="border px-4 py-2 text-sm text-center">Type</th>
                        <th className="border px-4 py-2 text-sm text-center">Active Amount</th>
                        <th className="border px-4 py-2 text-sm text-center">Expire Date</th>
                        <th className="border px-4 py-2 text-sm text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(2).fill().map((_, idx) =>
                            <tr key={idx}>
                                <td className="border px-4 py-2 text-sm text-center">{idx + 1}</td>
                                <td className="border px-4 py-2 text-sm text-center"><p className='line-clamp-1'>Nova</p></td>
                                <td className="border px-4 py-2 text-sm text-center"><p className='line-clamp-1'>Nova</p></td>
                                <td className="border px-4 py-2 text-sm text-center">20 TK</td>
                                <td className="border px-4 py-2 text-sm text-center">Fixed</td>
                                <td className="border px-4 py-2 text-sm text-center">100</td>
                                <td className="border px-4 py-2 text-sm text-center text-red-500">Expired</td>
                                <td className="border px-4 py-2 text-sm text-center">
                                    <div className='flex items-center justify-center'>
                                        <Link href='/' className='rounded-l bg-blue-500 hover:bg-blue-600 text-white text-xl p-1'><BiSolidPencil /></Link>
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

export default CouponTable;