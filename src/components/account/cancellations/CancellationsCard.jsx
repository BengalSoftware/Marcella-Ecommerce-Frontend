'use client'
import React, { useContext, useEffect, useState } from 'react';
import { getAllOrderByUserEmail } from '@/lib/addToCartApi/addToCartApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import OrderDetailsModal from '../order/OrderDetailsModal';
import OrderSingelCard from '../order/OrderSingelCard';
import ReturnOrder from '../return/ReturnOrder';

const ReturnCard = () => {
    const [orders, setOrders] = useState(null);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllOrderByUserEmail(user?.data?.user?.email);
                if (res) {
                    setOrders(res)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [user?.data?.user?.email])


    return (
        <>
            {
                orders?.map(order => (order?.report?.requestedFor === 'cancel' && order?.report?.status === 'accepted') &&
                    <div
                        key={order?._id}
                        className='border rounded-md mt-4 p-2'
                    >
                        <div className='flex items-center justify-between border-dashed border-b border-b-dark pb-2'>
                            <div>
                                <h1 className='text-primary font-medium'>Order Id: #{order?.orderId}</h1>
                                <p className='text-sm'>Date: {new Date(order?.createdAt).toLocaleString()}</p>
                            </div>
                            <div>
                                <h1>Total: {order?.totalAmount}</h1>
                                <OrderDetailsModal
                                    orders={orders}
                                    order={order}
                                />
                            </div>
                        </div>


                        {/* single order card  */}

                        {
                            order?.products?.map(product =>
                                <OrderSingelCard
                                    key={product?._id}
                                    product={product}
                                    customStatus={order?.status} />
                            )
                        }

                        {/* button section  */}
                        <div className='flex items-center justify-end'>
                            {
                                order?.status === 'pending' || order?.status === 'processing' ?
                                    <button className='bg-red-500 hover:bg-red-700 px-4 py-1 rounded-full text-white text-sm'>Cancel</button> : null
                            }
                            {
                                order?.status === 'delivered' ?
                                    <div className='flex items-center gap-x-4'>
                                        <p className='text-xs'>Delivered on {new Date(order?.updatedAt).toLocaleString()}</p>
                                        <p className='text-xs'>{Math.floor((new Date().getTime() - new Date(order?.updatedAt).getTime()) / (1000 * 60 * 60 * 24))}</p>
                                        {
                                            (Math.floor((new Date().getTime() - new Date(order?.updatedAt).getTime()) / (1000 * 60 * 60 * 24)) <= 7) &&
                                            <ReturnOrder
                                                order={order}
                                            />
                                        }
                                    </div> : null
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ReturnCard;