import React from 'react';

const TransactionTable = () => {
    return (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <h1 className='p-4'>Transaction Overview</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2 text-sm text-center">Date</th>
                        <th className="border p-2 text-sm text-center">Transaction Type</th>
                        <th className="border p-2 text-sm text-center">Transaction Number</th>
                        <th className="border p-2 text-sm text-center">Order ID</th>
                        <th className="border p-2 text-sm text-center">Details</th>
                        <th className="border p-2 text-sm text-center">Comment</th>
                        <th className="border p-2 text-sm text-center">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {Array(5).fill()?.length > 0 ?
                        Array(5).fill()?.map((_, idx) =>
                            <tr key={idx}>
                                <td className="border p-2 text-sm text-center">{idx + 1}</td>
                                <td className="border p-2 text-sm text-center">{'product?.orderId'}</td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{'product?.reason'}</p></td>
                                <td className="border p-2 text-sm text-center">{'product?.requestedFor'}</td>
                                <td className="border p-2 text-xs text-center">{new Date().toDateString('product?.createdAt')}</td>
                                <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{'product?.description'}</p></td>
                                <td className="border p-2 text-sm text-center">
                                    <div className='flex items-center justify-center'>
                                        {/* <ReportViewModal /> */}b
                                    </div>
                                </td>
                            </tr>
                        ) :
                        <tr>
                            <td colSpan={8} className="border p-2 text-xs text-center py-10"><p>No Reports Found</p></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;