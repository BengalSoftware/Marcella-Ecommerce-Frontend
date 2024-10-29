'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { orderReportMutation } from '@/lib/orderApi/orderApi';
import { Modal } from 'antd';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CancelOrder = ({ order }) => {
    const { user } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [returnModal, setReturnModal] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reason = e.target.reason.value;
        const description = e.target.description.value;
        const data = {
            orderId: order?.orderId,
            products: order?.products,
            email: user?.data?.user?.email,
            requestedFor: 'cancel',
            reason,
            description
        }


        try {
            setIsLoading(true)
            const res = await orderReportMutation(data);
            if (res) {
                toast.success('Your Report has been submitted')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div>
            {order?.report ?
                <p className={`text-xs capitalize 
            ${order?.report?.status === 'pending' && 'text-yellow-500'}
            ${order?.report?.status === 'accepted' && 'text-primary'}
            ${order?.report?.status === 'rejected' && 'text-red-500'}

            `}>Cancel {order?.report?.status}</p>
                : <button onClick={() => setReturnModal(true)} className='bg-red-500 hover:bg-red-700 px-4 py-1 rounded-full text-white text-sm'>Cancel</button>}
            <Modal
                title="Cancel Order"
                centered
                open={returnModal}
                onCancel={() => setReturnModal(false)}
                footer={false}
            >
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <select className='rounded border outline-none p-2 w-full' name="reason" id="">
                        <option value="">Select Reason</option>
                        <option value="bad product">Bad Product</option>
                        <option value="duplicate product">Duplicate Product</option>
                        <option value="product doesn't match">Product doesn't match</option>
                    </select>
                    <label className='block font-semibold'>Tell us about your Cancel</label>
                    <textarea className='rounded border w-full outline-none p-2' name="description" id="" cols="55" placeholder='Write Your think' rows="4"></textarea>

                    <div className='flex items-center justify-end'>
                        <button className='bg-primary font-medium text-white rounded-md px-4 py-2 hover:bg-dark'>{isLoading ? 'Loading' : 'Submit'}</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default CancelOrder;