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

    const allProducts = allOrders?.filter(entry =>
        entry.products.some(product => product.product.sellerId === sellerInfo?._id)
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
                    {allProducts?.length > 0 ?
                        allProducts?.map((product, idx) =>
                            <tr key={idx}>
                                <td className="border p-2 text-xs text-center">{idx + 1}</td>
                                <td className="border p-2 text-xs text-center"><p className='line-clamp-1' title={product?.userName}>{product?.userName}</p></td>
                                <td className="border p-2 text-xs text-center">{product?.orderId}</td>
                                <td className="border p-2 text-xs text-center">{product?.userPhone}</td>
                                <td className="border p-2 text-xs text-center">{product?.totalAmount}</td>
                                <td className="border p-2 text-xs text-center">{product?.paymentType}</td>
                                <td className="border p-2 text-xs text-center">{new Date().toDateString(product?.createdAt)}</td>
                                <td className="border p-2 text-xs text-center">{new Date().toDateString(product?.updatedAt)}</td>
                                <td className="border p-2 text-xs text-center">
                                    <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-xs'>
                                        <option value="pending">Pending</option>
                                        <option value="cancelled">Cancelled</option>
                                        <option value="confirmed">Confirmed</option>
                                    </select>
                                </td>
                                <td className="border p-2 text-xs text-center">
                                    <div className='flex items-center justify-center'>
                                        <OrderViewModal
                                            sellerInfo={sellerInfo}
                                            id={product?._id} />
                                        {/* <button className='rounded-r bg-red-500 hover:bg-red-600 text-white text-xl p-1'>
                                            <MdDelete />
                                        </button> */}
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