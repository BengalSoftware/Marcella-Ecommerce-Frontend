'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getAllDeliveryOrderByQuery } from '@/lib/orderApi/orderApi';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import React, { useContext, useEffect, useState } from 'react';

const OrderOverviewTable = () => {
    const [allOrders, setAllOrders] = useState(null);
    const [sellerInfo, setSellerInfo] = useState(null);
    const { seller } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [orderResponse, sellerInfoResponse] = await Promise.all([
                    getAllDeliveryOrderByQuery(),
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
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <h1 className='p-4'>Order Overview</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2 text-sm text-center">Date</th>
                        <th className="border p-2 text-sm text-center">Order Id</th>
                        <th className="border p-2 text-sm text-center">Order Item</th>
                        <th className="border p-2 text-sm text-center">Seller SKU</th>
                        <th className="border p-2 text-sm text-center">Unit Price</th>
                        <th className="border p-2 text-sm text-center">Operational Status</th>
                        <th className="border p-2 text-sm text-center">Payout Status</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts?.length > 0 ?
                        allProducts?.map((product, idx) => product?.products?.map(spro => spro?.product?.sellerId === sellerInfo?._id &&
                            <tr key={idx}>
                                <td className="border p-2 text-sm text-center" title={new Date(product?.createdAt).toLocaleDateString()}>{new Date(product?.createdAt).toLocaleDateString()}</td>
                                <td className="border p-2 text-sm text-center" title={product?.orderId}>{product?.orderId}</td>
                                <td className="border p-2 text-sm text-center" title={spro?.product?.name}><p className='line-clamp-1'>{spro?.product?.name}</p></td>
                                <td className="border p-2 text-sm text-center" title={spro?.product?.sellerId}><p className='line-clamp-1'>{spro?.product?.sellerId}</p></td>
                                <td className="border p-2 text-sm text-center" title={spro?.offerPrice}><p className='line-clamp-1'>{spro?.offerPrice}</p></td>
                                <td className="border p-2 text-sm text-center" title={product?.status}><p className='line-clamp-1'>{product?.status}</p></td>
                                <td className={`border p-2 text-xs text-center ${spro?.paymentStatus === 'unpaid' ? 'text-red-500' : 'text-green-500'}`} title={spro?.paymentStatus}>{spro?.paymentStatus}</td>
                            </tr>
                        )

                        ) :
                        <tr>
                            <td colSpan={8} className="border p-2 text-xs text-center py-10"><p>No Overview Found</p></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderOverviewTable;