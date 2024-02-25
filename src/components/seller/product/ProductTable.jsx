'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { getSellerProduct } from '@/lib/productApi/productApi';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { BiSolidPencil } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const ProductTable = () => {
    const [products, setProducts] = useState(null);
    const { sellerPSuccess, setSellerPSuccess } = useContext(StateContext);
    const [singleSeller, setSingleSeller] = useState(null);
    const { seller } = useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            if (singleSeller) {
                try {
                    const data = await getSellerProduct(singleSeller);
                    if (data) {
                        setProducts(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchData();
    }, [singleSeller])

    // fetch single seller 
    useEffect(() => {
        const fetchData = async () => {
            if (seller?.data?.user?.email) {
                try {
                    const res = await getSingleSeller(seller?.data?.user?.email);
                    if (res?.data) {
                        setSingleSeller(res?.data?._id);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchData();
    }, [seller?.data?.user?.email]);


    return (
        <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg">
            <h1 className='p-4'>All Products</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-sm text-center">ID</th>
                        <th className="border px-4 py-2 text-sm text-center">Name</th>
                        <th className="border px-4 py-2 text-sm text-center">Status</th>
                        <th className="border px-4 py-2 text-sm text-center">Qty</th>
                        <th className="border px-4 py-2 text-sm text-center">Price</th>
                        <th className="border px-4 py-2 text-sm text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.result?.map((product, idx) =>
                            <tr key={product?._id}>
                                <td className="border px-4 py-2 text-sm text-center">{idx + 1}</td>
                                <td className="border px-4 py-2 text-sm text-center"><p className='line-clamp-1'>{product?.name}</p></td>
                                <td className="border px-4 py-2 text-sm text-center">{product?.status}</td>
                                <td className="border px-4 py-2 text-sm text-center">{product?.quantity}</td>
                                <td className="border px-4 py-2 text-sm text-center">{product?.offerPrice ? product?.offerPrice : product?.price}</td>
                                <td className="border px-4 py-2 text-sm text-center">
                                    <div className='flex items-center justify-center'>
                                        <Link href={`/seller/edit-product/${product?._id}`} className='rounded-l bg-blue-500 hover:bg-blue-600 text-white text-xl p-1'><BiSolidPencil /></Link>
                                        <Link href={`/product/${product?.slug}`} target='_blank' className='bg-green-500 hover:bg-green-600 text-white text-xl p-1'><IoEye /></Link>
                                        <button className='rounded-r bg-red-500 hover:bg-red-600 text-white text-xl p-1'>
                                            <MdDelete />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;