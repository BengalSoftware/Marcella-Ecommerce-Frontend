'use client'
import React, { useContext, useEffect, useState } from 'react';
import FlashProductHeader from './FlashProductHeader';
import { getFlashSaleOfferType, getFlashSaleProduct } from '@/lib/flashSale/flashSaleApi';
import Link from 'next/link';
import { BiSolidPencil } from 'react-icons/bi';
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';

const FlashProductTable = () => {
    const [flashType, setFlashType] = useState(null)
    const [query, setQuery] = useState(null);
    const [flashProducts, setFlashProducts] = useState(null)
    const { seller } = useContext(AuthContext);
    const [singleSeller, setSingleSeller] = useState(null)

    const handleNavTab = (flashType) => {
        setQuery(flashType)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [flashTypeResponse, flashProductResponse] = await Promise.all([
                    getFlashSaleOfferType(),
                    getFlashSaleProduct(query ? query : flashType?.data?.[0]?.name)
                ])
                setFlashType(flashTypeResponse)
                setFlashProducts(flashProductResponse)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [query, flashType?.data?.[0]?.name])



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


    const flashProductBySeller = flashProducts?.result?.data?.filter(product => product?.sellerId === singleSeller);
 

    return (
        <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg">
            <h1 className='p-4'>All Products</h1>
            <FlashProductHeader
                query={query}
                flashType={flashType}
                handleNavTab={handleNavTab} />
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
                    {flashProductBySeller?.length > 0 ?
                        flashProductBySeller?.map((product, idx) =>
                            <tr key={idx}>
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
                        ) :
                        <tr>
                            <td colSpan={6} className="border py-10 p-2 text-xs text-center"><p>No product Found</p></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FlashProductTable;