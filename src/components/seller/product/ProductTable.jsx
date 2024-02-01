import Link from 'next/link';
import React from 'react';
import { BiSolidPencil } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const ProductTable = () => {
    return (
        <div class="overflow-x-auto mt-10 bg-white shadow rounded-lg">
            <h1 className='p-4'>All Products</h1>
            <table class="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th class="border px-4 py-2 text-sm text-center">ID</th>
                        <th class="border px-4 py-2 text-sm text-center">Name</th>
                        <th class="border px-4 py-2 text-sm text-center">Status</th>
                        <th class="border px-4 py-2 text-sm text-center">Qty</th>
                        <th class="border px-4 py-2 text-sm text-center">Price</th>
                        <th class="border px-4 py-2 text-sm text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(8).fill().map((_, idx) =>
                            <tr key={idx}>
                                <td class="border px-4 py-2 text-sm text-center">{idx + 1}</td>
                                <td class="border px-4 py-2 text-sm text-center"><p className='line-clamp-1'>Nova Electric Kettly</p></td>
                                <td class="border px-4 py-2 text-sm text-center">In Stock</td>
                                <td class="border px-4 py-2 text-sm text-center">100</td>
                                <td class="border px-4 py-2 text-sm text-center">1200</td>
                                <td class="border px-4 py-2 text-sm text-center">
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

export default ProductTable;