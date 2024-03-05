'use client'
import React, { useContext, useEffect, useState } from 'react';
import OrderDetailsModal from './OrderDetailsModal';
import OrderSingelCard from './OrderSingelCard';
import { getAllOrderByUserEmail } from '@/lib/addToCartApi/addToCartApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import ReturnOrder from '../return/ReturnOrder';
import CancelOrder from '../cancellations/CancelOrder';

const OrderCard = () => {
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


    console.log('orders', orders)

    return (
        <>
            {
                orders?.map(order =>
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
                                    <CancelOrder order={order} /> : null
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

export default OrderCard;