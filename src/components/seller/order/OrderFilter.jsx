import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const OrderFilter = () => {
    return (
        <div className='bg-white p-4 rounded-md shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4'>
            <h1 className='text-2xl font-medium text-dark'>Orders</h1>
            <div>
                <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-sm'>
                    <option value="">Filter by Payment Status</option>
                    <option value="">Paid</option>
                    <option value="">Unpaid</option>
                </select>
            </div>
            <div>
                <select required name="" className='block w-full border rounded-md p-2.5 outline-none text-dark text-sm'>
                    <option value="">Filter by Delivery Status</option>
                    <option value="">Pending</option>
                    <option value="">Confirmed</option>
                    <option value="">Delivery</option>
                </select>
            </div>
            <div className='bg-white flex items-center rounded border border-primary pr-2'>
                <input className='p-2 rounded outline-none border-r mr-2 w-11/12' type='text' placeholder='Search' />
                <IoIosSearch className='text-2xl w-1/12' />
            </div>
        </div>
    );
};

export default OrderFilter;