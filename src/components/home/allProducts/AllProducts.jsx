'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/card/ProductCard';
import { getAllProduct } from '@/lib/productApi/productApi';
import LoadmoreLoader from '@/utility/loadmore/LoadmoreLoader';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        setLoading(true);
        const initialData = await getAllProduct(page);
        setProducts(initialData?.result?.data || []);
        setLoading(false);
    };

    const fetchMoreData = async () => {
        setLoading(true);
        const nextPage = page + 1;
        const newData = await getAllProduct(nextPage);
        setProducts([...products, ...newData?.result?.data]);
        setPage(nextPage);
        setLoading(false);
    };

    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Products</h1>
            <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5'>
                {products.map(product => (
                    <div key={product?._id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            {loading && <LoadmoreLoader />}
            {!loading && (
                <div className='mt-10 flex items-center justify-center mb-10'>
                    <button onClick={fetchMoreData} className='bg-g-primary rounded-md px-6 py-3 md:px-10 lg:px-12 xl:px-16 text-white hover:opacity-90'>Load More</button>
                </div>
            )}
        </div>
    );
};

export default AllProducts;

