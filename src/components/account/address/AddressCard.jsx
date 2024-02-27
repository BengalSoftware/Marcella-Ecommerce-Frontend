'use client'
import AddressForm from '@/components/form/account/AddressForm';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { getSingelUser } from '@/lib/accountApi/accountApi';
import { activeSingleAddress, deleteSingelAddress } from '@/lib/addressApi/addressApi';
import { Modal } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AddressCard = ({ adrs, email, selectSuccess, setSelectSuccess }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [editAddress, setEditAddress] = useState({});
    const [dLoading, setDLoading] = useState(false)
    const { setAddressSuccess } = useContext(StateContext);
    const { _id, shippingName, selected, shippingPhone, address } = adrs || {};
    const [userData, setUserData] = useState(null);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingelUser(user?.data?.user?.email);
                if (res) {
                    setUserData(res)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [user?.data?.user?.email])

    const handleActiveAddress = async (id) => {
        try {
            await activeSingleAddress(userData?.data?._id, { id });
            setSelectSuccess(!selectSuccess);
        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteAddress = async (id) => {
        try {
            setDLoading(true)
            const res = await deleteSingelAddress(email, { id });
            if (res) {
                setAddressSuccess(true)
            }
        } catch (error) {
            console.error(error);
        } finally {
            setDLoading(false)
        }
    }


    const handleEditAddress = (adrs) => {
        setModalOpen(true);
        setEditAddress(adrs)
    }


    console.log(userData?.data?._id)
    return (
        <div className={`bg-white p-4 rounded hover:shadow-md cursor-pointer border text-gray-600 mb-10 ${'adrs?.selected' && 'border-green-600'}`}>
            <div className='flex justify-between items-center'>
                <p className='text-sm font-[500]'>{shippingName}</p>
                <div className='flex justify-between items-center'>
                    {
                        selected ? <span className='flex items-center mr-2'>
                            <p className='mr-1 text-green-600 uppercase font-semibold text-sm'>Selected</p>
                            <FaCheckCircle className='text-green-600 text-sm'></FaCheckCircle>
                        </span> :
                            <button onClick={() => handleActiveAddress(_id)} className='text-gray-500 uppercase font-semibold tracking-widest hover:bg-green-600 hover:text-white text-sm border p-1 rounded-md mr-3'>Select</button>
                    }
                    <div>
                        <button onClick={() => handleEditAddress('adrs')} className='text-blue-500 text-sm'>Edit</button>
                        <Modal
                            title="Edit Address"
                            centered
                            open={modalOpen}
                            onCancel={() => setModalOpen(false)}
                            footer={false}
                        >
                            <AddressForm />
                        </Modal>
                    </div>
                </div>
            </div>
            <p className='text-sm my-2'>{shippingPhone}</p>
            <span className='flex justify-between items-center'>
                <p className='text-sm'>House No: {address}</p>
                {
                    '!adrs?.selected' &&
                    <button onClick={() => handleDeleteAddress(_id)} className='border p-1 rounded-md text-sm font-semibold hover:bg-red-600 hover:text-white'>{dLoading ? 'Removing..' : 'Remove'}</button>
                }
            </span>
        </div>
    );
};

export default AddressCard;