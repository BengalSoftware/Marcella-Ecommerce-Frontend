import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FilterSidebar from '@/components/productSearching/filterSidebar/FilterSidebar';
import MobileFilterSidebar from '@/components/productSearching/filterSidebar/MobileFilterSidebar';
import SearchingOutlet from '@/components/productSearching/searchingOutlet/SearchingOutlet';
import { Pagination } from 'antd';
import React from 'react';

const AllProductPage = () => {
    return (
        <div className='mt-5'>
            <BreadCrumb />
            <div className='md:grid grid-cols-5 gap-4'>
                <div className='md:col-span-1 hidden md:block'>
                    <FilterSidebar />
                </div>
                <div className='md:hidden ml-1 md:ml-0'>
                    <MobileFilterSidebar />
                </div>
                <div className='md:col-span-4'>
                    <p className='text-sm mb-5 ml-1 mt-2'>46 items found for <span className='text-primary'>"electric kettle"</span> </p>
                    <SearchingOutlet />
                    <div className='mt-5 flex items-center justify-end'>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductPage;