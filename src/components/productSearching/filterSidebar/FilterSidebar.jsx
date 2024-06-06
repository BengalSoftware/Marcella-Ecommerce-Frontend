'use client'
import React, { useCallback, useEffect, useState } from 'react';
import FilterAccordion from '../filterAccordion/FilterAccordion';
import Link from 'next/link';
import { getAllBrands, getAllCategory } from '@/lib/categories/categoriesApi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getAllColor, getAllSize } from '@/lib/variationApi/variationAPi';

const FilterSidebar = () => {
    const pathname = usePathname();
    const [categories, setCategories] = useState(null);
    const [brands, setBrands] = useState(null);
    const [sizes, setSizes] = useState(null);
    const [colors, setColors] = useState(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesRes, brandsRes, sizeRes, colorRes] = await Promise.all([
                    getAllCategory(),
                    getAllBrands(),
                    getAllSize(),
                    getAllColor()
                ]);
                setCategories(categoriesRes?.result);
                setBrands(brandsRes?.result);
                setSizes(sizeRes?.data);
                setColors(colorRes?.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);



    // get price range 
    const handleSearch = (e) => {
        e.preventDefault();
        const min = e.target.min.value;
        const max = e.target.max.value;

        router.push(pathname + '?' + createQueryString('price', `${min}-${max}`))
    }
    

    return (
        <div>
            {/* categories  */}
            <FilterAccordion
                title={'All Categories'}
            >
                <ul className='py-2'>
                    {
                        categories?.map(category =>
                            <li key={category?._id}>
                                <Link href={pathname + '?' + createQueryString('category', category.slug)} className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t'>{category?.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </FilterAccordion>

            {/* brands  */}
            <FilterAccordion
                title={'All Brands'}
            >
                <ul className='py-2'>
                    {
                        brands?.map(brand =>
                            <li key={brand?._id}>
                                <Link href={pathname + '?' + createQueryString('brand', brand?.slug)} className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t'>{brand?.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </FilterAccordion>


            {/* Size  */}
            <FilterAccordion
                title={'Size'}
            >
                <ul className='py-2'>
                    {
                        sizes?.map(size =>
                            <li key={size?._id}>
                                <Link href={pathname + '?' + createQueryString('size', size.name)} className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t uppercase'>{size?.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </FilterAccordion>


            {/* Color  */}
            <FilterAccordion
                title={'Color'}
            >
                <ul className='py-2 grid grid-cols-3 gap-2 mx-2'>
                    {
                        colors?.map(color =>
                            <li key={color?._id}>
                                <Link href={pathname + '?' + createQueryString('color', color.name)} className='w-full block h-5 rounded' style={{ backgroundColor: color?.colorCode }}></Link>
                            </li>
                        )
                    }
                </ul>
            </FilterAccordion>


            {/* Price  */}
            <FilterAccordion
                title={'Price'}
            >
                <div className='px-4 pt-2 pb-4 flex items-center justify-between gap-2'>
                    <form onSubmit={handleSearch} className='flex items-center gap-2'>
                        <input required className='w-2/5 border  rounded outline-none p-1 placeholder:text-black font-[300] placeholder:text-xs' name='min' placeholder='Min' type="number" />

                        <input required className='w-2/5 border  rounded outline-none p-1 placeholder:text-black font-[300] placeholder:text-xs' name='max' placeholder='Max' type="number" />
                        <button className='bg-primary rounded-md px-4 py-1.5 text-sm text-white hover:bg-dark'>Apply</button>
                    </form>

                </div>
            </FilterAccordion>

        </div>
    );
};

export default FilterSidebar;