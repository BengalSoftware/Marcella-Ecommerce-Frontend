import ProductTable from '@/components/seller/product/ProductTable';
import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const SellerProductPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <Link href='/' className='bg-dark hover:bg-primary text-white px-4 py-2 rounded-md'>Add Product +</Link>
                <div className='bg-white flex items-center rounded border border-primary pr-2'>
                    <input className='p-2 rounded outline-none border-r mr-2' type='text' placeholder='Search' />
                    <IoIosSearch className='text-2xl' />
                </div>
            </div>
            <ProductTable />
        </div>
    );
};

export default SellerProductPage;