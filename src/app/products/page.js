import FilterSidebar from '@/components/productSearching/filterSidebar/FilterSidebar';
import React from 'react';

const ProductsPage = () => {
    return (
        <div className="bg-[#f5f5f5]">
            <div className="container mx-auto py-1 md:py5 xl:py-10">
                <div className="mx-4 md:mx-0">
                    <div className='grid grid-cols-5'>
                        <div className='md:col-span-1'>
                            <FilterSidebar />
                        </div>
                        <div className='md:col-span-4'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;