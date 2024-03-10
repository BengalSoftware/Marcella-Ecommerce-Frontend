'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getAllReportsByQuery } from '@/lib/reportApi/reportApi';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import ReportViewModal from './ReportViewModal';

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

    const allProducts = allReports?.filter(entry =>
        entry.products.some(product => product.product.sellerId === sellerInfo?._id)
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
                    {allProducts?.length > 0 ?
                        allProducts?.map((product, idx) =>
                            <tr key={idx}>
                                <td className="border p-2 text-sm text-center">{idx + 1}</td>
                                <td className="border p-2 text-sm text-center">{product?.orderId}</td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{product?.reason}</p></td>
                                <td className="border p-2 text-sm text-center">{product?.requestedFor}</td>
                                <td className="border p-2 text-xs text-center">{new Date().toDateString(product?.createdAt)}</td>
                                <td className="border p-2 text-sm text-center">
                                    <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-sm'>
                                        <option value="pending">Pending</option>
                                        <option value="cancelled">Cancelled</option>
                                        <option value="confirmed">Confirmed</option>
                                    </select>
                                </td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{product?.description}</p></td>
                                <td className="border p-2 text-sm text-center">
                                    <div className='flex items-center justify-center'>
                                        <ReportViewModal />
                                    </div>
                                </td>
                            </tr>
                        ) :
                        <tr>
                            <td colSpan={8} className="border p-2 text-xs text-center py-10"><p>No Reports Found</p></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportTableList;