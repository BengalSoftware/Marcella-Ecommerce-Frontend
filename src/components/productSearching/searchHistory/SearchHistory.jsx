'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";

const SearchHistory = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString());
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        setSearchHistory(params.toString().split("&"))
    }, [searchParams])


    const handleDelete = (deleteItem) => {
        params.delete(deleteItem);
        router.push(pathname + '?' + params.toString())
    }

    return (
        <div className='flex gap-1 md:gap-2 flex-wrap md:pr-2'>
            {
                searchHistory[0] != "" && <>{searchHistory.map(item => <p key={item} onClick={() => handleDelete(item.split("=")[0])} className='cursor-pointer shadow-sm text-xs px-2 py-1 border border-[#fff7f3] bg-[#fff7f3] rounded flex gap-1 items-center w-fit capitalize'>
                    {item.split("=")[1]}
                    <span className='transition-all text-red-400  hover:text-white hover:bg-red-300 p-1'>
                        <IoMdClose />
                    </span>
                </p>)}
                    <button onClick={() => router.push(pathname)} className='transition-colors text-xs hover:text-red-500' type='button'>Clear All</button>

                </>
            }

        </div>
    );
};

export default SearchHistory;