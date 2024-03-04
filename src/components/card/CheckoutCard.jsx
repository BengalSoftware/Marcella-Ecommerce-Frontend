'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { addToCartDataByEmail, deleteCardDataByEmailId } from '@/lib/addToCartApi/addToCartApi';
import DeleteLoader from '@/utility/deleteLoader/DeleteLoader';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CheckoutCard = ({ statusCard, product }) => {
    const [productQty, setProductQty] = useState(product?.quantity);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [incrementLoading, setIncrementLoading] = useState(false)
    const [decrementLoading, setDecrementLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const { setCartSuccess } = useContext(StateContext)
    const { _id, images, name, altTag } = product?.product || {};


    const handleIncrement = async () => {
        const newQty = productQty + 1;
        setProductQty(newQty);
        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: _id,
            };
        } else {
            toast.error('Please Signin Your Account')
        }
        try {
            setIncrementLoading(true)
            const res = await addToCartDataByEmail(user?.data?.user?.email, data);
            if (res) {
                setCartSuccess(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIncrementLoading(false)
        }
    }


    const handleDecrement = async () => {
        const newQty = productQty - 1;
        setProductQty(newQty);
        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: _id,
                minusQty: product?.quantity
            };
        } else {
            toast.error('Please Signin Your Account')
        }
        try {
            setDecrementLoading(true)
            const res = await addToCartDataByEmail(user?.data?.user?.email, data);
            if (res) {
                setCartSuccess(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setDecrementLoading(false)
        }
    }


    const handleDeleteProduct = async () => {
        setDeleteLoading(true);
        const data = { cartId: product?._id }
        try {
            const res = await deleteCardDataByEmailId(user?.data?.user?.email, data);
            if (res) {
                setCartSuccess(true);
                toast.success('Cart delete successfull')
            }
        } catch (error) {
            console.error(error);
        } finally {
            setDeleteLoading(false);
        }
    };

    return (
        <div className={`border rounded-md grid grid-cols-6 gap-4 items-center p-2 my-4 ${statusCard ? 'lg:grid-cols-6' : 'lg:grid-cols-10'}`}>
            <div className={`col-span-2 lg:col-span-2`}>
                <Image width={500} height={500} quality={100} className='h-12 w-12 rounded-md' src={images?.[0]} alt={altTag} />
            </div>
            <div className={`col-span-4 ${statusCard ? 'lg:col-span-4' : 'lg:col-span-5'}`}>
                <p className='line-clamp-2 text-sm'>{name}</p>
            </div>
            <div className={`col-span-3 flex items-center justify-between border rounded-md w-fit ${statusCard ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
                <button onClick={handleDecrement} disabled={productQty <= 1} className={`text-sm p-1 border-r ${productQty <= 1 && 'cursor-not-allowed'}`}>{decrementLoading ? <DeleteLoader /> : <FiMinus />}</button>
                <p className='px-4'>{product?.quantity}</p>
                <button onClick={handleIncrement} disabled={productQty >= 5} className={`text-sm p-1 border-l ${productQty >= 5 && 'cursor-not-allowed'}`}>{incrementLoading ? <DeleteLoader /> : <FiPlus />}</button>
            </div>
            <div className={`col-span-3 text-end ${statusCard ? 'lg:col-span-3' : 'lg:col-span-1'}`}>
                <button onClick={() => handleDeleteProduct()} className='text-xl'>
                    {
                        deleteLoading ? <DeleteLoader /> : <MdDelete />
                    }
                </button>
            </div>
        </div>
    );
};

export default CheckoutCard;