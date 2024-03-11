'use client'
import { productSearchSuggestion } from '@/lib/productApi/productApi';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState(null)
    const [searchData, setSearchData] = useState(null)
    const suggestionBarRef = useRef();


    const handelSubmitSearch = (e) => {
        e.preventDefault();
        e.target.reset()
    }


    useEffect(() => {
        const searchMutation = async () => {
            try {
                const data = await productSearchSuggestion(searchValue);
                if (data) {
                    setSearchData(data?.tags)
                }
            } catch (error) {
                console.error(error)
            }

        }
        searchMutation();
    }, [searchValue])

    

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!suggestionBarRef.current?.contains(e.target)) {
                setSearchValue(null);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, []);

    return (
        <div ref={suggestionBarRef} className='w-full relative rounded-b-md'>
            <form onSubmit={handelSubmitSearch} className='bg-white w-full flex items-center rounded-full px-4'>
                <input onChange={(e) => setSearchValue(e.target.value)} className='w-full py-3 pr-3 outline-none rounded-full placeholder:text-sm' placeholder='Search for products..' type="text" />
                <button><IoIosSearch className='text-2xl cursor-pointer' /></button>
            </form>

            {
                searchValue && <ul className='absolute bg-white rounded-md shadow w-full z-50 top-14'>
                    {
                        searchData?.length > 0 ?
                            searchData?.map((tag, idx) =>
                                <li key={idx}>
                                    <Link onClick={() => setSearchValue(null)} href={`/products?search=${tag}`} className='w-full flex items-center justify-between py-2 text-sm px-4 hover:text-primary'>
                                        {tag}
                                        <MdOutlineArrowOutward />
                                    </Link>

                                </li>

                            ) :
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-center my-5 text-dark'>No Search Result Found</p>
                            </div>
                    }
                </ul>
            }
        </div>
    );
};

export default SearchBar;