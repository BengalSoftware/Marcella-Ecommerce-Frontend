import AddressCard from '@/components/account/address/AddressCard';
import AllAddress from '@/components/account/address/AllAddress';
import CheckoutCard from '@/components/card/CheckoutCard';
import AddressForm from '@/components/form/account/AddressForm';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { Modal } from 'antd';
import React, { useContext, useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { IoMdSwitch } from "react-icons/io";

const CheckoutOutlet = ({ address, cartData }) => {
    const { modalOpen, setModalOpen } = useContext(StateContext)
    const [switchModal, setSwitchModal] = useState(false)
    console.log(cartData)

    return (
        <div>
            <div className='flex items-center justify-center gap-4'>
                <button onClick={() => setModalOpen(true)} className='bg-primary w-full py-2 text-white rounded-md hover:bg-dark'>+ Add New Address</button>
                <button onClick={() => setSwitchModal(true)} className='hover:bg-primary w-full py-2 text-white rounded-md bg-dark flex items-center justify-center'><IoMdSwitch /> Switch Address</button>
            </div>


            {/* new address modal  */}
            <Modal
                title="Add New Address"
                centered
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={false}
            >
                <AddressForm />
            </Modal>

            {/* all adddress  */}
            <Modal
                title="All Address"
                width={1000}
                centered
                open={switchModal}
                onCancel={() => setSwitchModal(false)}
                footer={false}
            >
                <AllAddress />
            </Modal>



            <div className='mt-4'>
                <AddressCard adrs={address} />
            </div>


            <div className='bg-white rounded-md shadow p-4 mt-5'>
                <div className='flex items-center gap-2 pb-5 border-dashed border-primary border-b'>
                    <IoMdCart className='text-primary text-2xl' />
                    <h1 className='text-xl'>Cart Products</h1>
                </div>
                <div className='mt-4'>
                    {
                        cartData?.cartData?.products?.length > 0 ? cartData?.cartData?.products?.map(product =>

                            <CheckoutCard
                                key={product?._id}
                                product={product}
                                statusCard={true}
                            />
                        ) : <p className='text-center'>No cart data found</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckoutOutlet;