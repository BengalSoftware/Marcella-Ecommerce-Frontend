'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getAllReportsByQuery } from '@/lib/reportApi/reportApi';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const ReportTableList = () => {
    const [allReports, setAllReports] = useState(null);
    const [sellerInfo, setSellerInfo] = useState(null);
    const { seller } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [reportResponse, sellerInfoResponse] = await Promise.all([
                    getAllReportsByQuery(),
                    getSingleSeller(seller?.data?.user?.email)
                ])
                setAllReports(reportResponse?.result?.data)
                setSellerInfo(sellerInfoResponse?.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [seller?.data?.user?.email])

    const allProducts = allReports?.find(report => report?.products?.length > 0 ?
        report?.products?.find(product => product?.product?.sellerId === sellerInfo?._id) : null
    );
    
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
                    {allProducts?.products?.length > 0 ?
                        allProducts?.products?.map((_, idx) =>
                            <tr key={idx}>
                                <td className="border p-2 text-sm text-center">{idx + 1}</td>
                                <td className="border p-2 text-sm text-center">{allProducts?.orderId}</td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{allProducts?.reason}</p></td>
                                <td className="border p-2 text-sm text-center">{allProducts?.requestedFor}</td>
                                <td className="border p-2 text-xs text-center">{new Date().toDateString(allProducts?.createdAt)}</td>
                                <td className="border p-2 text-sm text-center">
                                    <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-sm'>
                                        <option value="pending">Pending</option>
                                        <option value="cancelled">Cancelled</option>
                                        <option value="confirmed">Confirmed</option>
                                    </select>
                                </td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{allProducts?.description}</p></td>
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
                        ) :
                        <tr>
                            <td className="border p-2 text-xs text-center"><p>No Order Found</p></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportTableList;