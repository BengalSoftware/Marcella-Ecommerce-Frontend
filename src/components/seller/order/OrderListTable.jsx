'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getAllOrderByQuery } from '@/lib/orderApi/orderApi';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import OrderViewModal from './OrderViewModal';

const OrderListTable = () => {
    const [allOrders, setAllOrders] = useState(null);
    const [sellerInfo, setSellerInfo] = useState(null);
    const { seller } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [orderResponse, sellerInfoResponse] = await Promise.all([
                    getAllOrderByQuery(),
                    getSingleSeller(seller?.data?.user?.email)
                ])
                setAllOrders(orderResponse?.data)
                setSellerInfo(sellerInfoResponse?.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [seller?.data?.user?.email])

    const allProducts = allOrders?.find(order => order?.products?.length > 0 ?
        order?.products?.find(product => product?.sellerId === sellerInfo?._id) : null
    );



    return (
        <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg">
            <h1 className='p-4'>All Orders</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2 text-xs text-center">SL</th>
                        <th className="border p-2 text-xs text-center">Customer</th>
                        <th className="border p-2 text-xs text-center">Order ID</th>
                        <th className="border p-2 text-xs text-center">Shipping Phone</th>
                        <th className="border p-2 text-xs text-center">Amount</th>
                        <th className="border p-2 text-xs text-center">Payment Method</th>
                        <th className="border p-2 text-xs text-center">Order Date</th>
                        <th className="border p-2 text-xs text-center">Modify Date</th>
                        <th className="border p-2 text-xs text-center">Order Status</th>
                        <th className="border p-2 text-xs text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts?.products?.length > 0 ?
                        allProducts?.products?.map((_, idx) =>
                            <tr key={idx}>
                                <td className="border p-2 text-xs text-center">{idx + 1}</td>
                                <td className="border p-2 text-xs text-center"><p className='line-clamp-1' title={allProducts?.userName}>{allProducts?.userName}</p></td>
                                <td className="border p-2 text-xs text-center">{allProducts?.orderId}</td>
                                <td className="border p-2 text-xs text-center">{allProducts?.userPhone}</td>
                                <td className="border p-2 text-xs text-center">{allProducts?.totalAmount}</td>
                                <td className="border p-2 text-xs text-center">{allProducts?.paymentType}</td>
                                <td className="border p-2 text-xs text-center">{new Date().toDateString(allProducts?.createdAt)}</td>
                                <td className="border p-2 text-xs text-center">{new Date().toDateString(allProducts?.updatedAt)}</td>
                                <td className="border p-2 text-xs text-center">
                                    <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-xs'>
                                        <option value="pending">Pending</option>
                                        <option value="cancelled">Cancelled</option>
                                        <option value="confirmed">Confirmed</option>
                                        {/* <option value="shipped">Shipped</option> */}
                                        {/* <option value="processing">Processing</option> */}
                                        {/* <option value="returned">Returned</option> */}
                                        {/* <option value="delivered">Delivered</option> */}
                                        {/* <option value="expired">Expired</option> */}
                                    </select>
                                </td>
                                <td className="border p-2 text-xs text-center">
                                    <div className='flex items-center justify-center'>
                                        <OrderViewModal id={allProducts?._id} />
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

export default OrderListTable;