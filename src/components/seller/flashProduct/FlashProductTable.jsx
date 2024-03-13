import React from 'react';

const FlashProductTable = () => {
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
                        Array(5).fill().map((_, idx) =>
                            <tr key={idx}>
                                <td className="border px-4 py-2 text-sm text-center">{idx + 1}</td>
                                <td className="border px-4 py-2 text-sm text-center"><p className='line-clamp-1'>{'product?.name'}</p></td>
                                <td className="border px-4 py-2 text-sm text-center">{'product?.status'}</td>
                                <td className="border px-4 py-2 text-sm text-center">{'product?.quantity'}</td>
                                <td className="border px-4 py-2 text-sm text-center">{'product?.offerPrice ? product?.offerPrice : product?.price'}</td>
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
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FlashProductTable;