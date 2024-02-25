'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/card/ProductCard';
import { getAllProduct } from '@/lib/productApi/productApi';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchingOutlet = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        const loadData = async () => {
            try {
                const params = new URLSearchParams(searchParams.toString());
                const productsData = await getAllProduct(`?${params.toString()}`);
                setProducts(productsData);
            } catch (error) {
                console.error(error);
            }
        };

        loadData();
    }, [searchParams]);

    console.log(products)

    return (
        <div>
            <p className='text-sm mb-5 ml-1 mt-2'>{products?.result?.totalProducts} items found for <span className='text-primary'>{`"${searchParams}"`}</span> </p>
            {
                products?.result?.data?.length > 0 ?
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-2'>
                        {
                            products?.result?.data.map(product =>
                                <ProductCard
                                    key={product?._id}
                                    product={product}
                                />
                            )
                        }
                    </div> :
                    <p className='text-center mt-10 text-dark'>No Search Result Found</p>
            }
        </div>
    );
};

export default SearchingOutlet;