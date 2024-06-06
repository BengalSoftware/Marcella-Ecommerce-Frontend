import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FilterSidebar from '@/components/productSearching/filterSidebar/FilterSidebar';
import MobileFilterSidebar from '@/components/productSearching/filterSidebar/MobileFilterSidebar';
import SearchingOutlet from '@/components/productSearching/searchingOutlet/SearchingOutlet';
import { Pagination } from 'antd';
import React from 'react';

const ProductsPage = () => {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto py-1 md:py-5">
                <div className="mx-4 md:mx-0">
                    <BreadCrumb />
                    <div className='md:grid grid-cols-5 gap-4'>
                        <div className='md:col-span-1 hidden md:block'>
                            <FilterSidebar />
                        </div>
                        <div className='md:hidden ml-1 md:ml-0'>
                            <MobileFilterSidebar />
                        </div>
                        <div className='md:col-span-4'>
                            <SearchingOutlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;