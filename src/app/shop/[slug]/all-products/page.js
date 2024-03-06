import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FilterSidebar from '@/components/productSearching/filterSidebar/FilterSidebar';
import MobileFilterSidebar from '@/components/productSearching/filterSidebar/MobileFilterSidebar';
import SearchingOutlet from '@/components/productSearching/searchingOutlet/SearchingOutlet';
import { Pagination } from 'antd';
import React from 'react';

const AllProductPage = ({ params }) => {
    const { slug } = params || {};
    
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
                    <SearchingOutlet slug={slug} />
                    <div className='mt-5 flex items-center justify-end'>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductPage;