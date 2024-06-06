import { getStoreLayoutQuery } from '@/lib/layoutStore/layoutStoreApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const StoreLayoutTable = ({ email }) => {
    const [layouts, setLayouts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getStoreLayoutQuery(email)
                if (res) {
                    setLayouts(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [email])
    const products1 = layouts?.data?.filter(layout => layout?.images?.length === 1)
    const products2 = layouts?.data?.filter(layout => layout?.images?.length === 2)
    const products3 = layouts?.data?.filter(layout => layout?.images?.length === 3)


    return (
        <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg">
            <h1 className='p-4 text-xl font-medium'>Layout & Product</h1>
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
                    {products1?.length > 0 ?
                        products2?.map((product, idx) =>
                            <tr key={product?._id}>
                                <td className="border px-4 py-2 text-sm text-center">{idx + 1}</td>
                                <td className="border px-4 py-2 text-sm text-center">
                                    <Image src={product?.images?.[0]} alt='img' quality={100} height={500} width={500} />
                                </td>
                                {/* <td className="border px-4 py-2 text-sm text-center">{product?.status}</td> */}
                                {/* <td className="border px-4 py-2 text-sm text-center">{product?.quantity}</td> */}
                                {/* <td className="border px-4 py-2 text-sm text-center">{product?.offerPrice ? product?.offerPrice : product?.price}</td> */}
                                {/* <td className="border px-4 py-2 text-sm text-center">
                                    <div className='flex items-center justify-center'>
                                        <Link href={`/seller/edit-product/${product?._id}`} className='rounded-l bg-blue-500 hover:bg-blue-600 text-white text-xl p-1'><BiSolidPencil /></Link>
                                        <Link href={`/product/${product?.slug}`} target='_blank' className='bg-green-500 hover:bg-green-600 text-white text-xl p-1'><IoEye /></Link>
                                        <button className='rounded-r bg-red-500 hover:bg-red-600 text-white text-xl p-1'>
                                            <MdDelete />
                                        </button>
                                    </div>
                                </td> */}
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

export default StoreLayoutTable;