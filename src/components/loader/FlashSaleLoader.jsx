'use client'
import React, { useEffect, useState } from 'react';

const FlashSaleLoader = () => {
    const [numColumns, setNumColumns] = useState(2);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1200) {
                setNumColumns(5);
            }
            else if (window.innerWidth >= 1024) {
                setNumColumns(3);
            }
            else if (window.innerWidth >= 600) {
                setNumColumns(2);
            }
            else {
                setNumColumns(2);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return (
        <div className='bg-white rounded-xl shadow mb-6'>
            <div className='flex items-center justify-between md:pr-5'>
                <div className='flex items-center p-5 gap-8'>
                    <h1 className='bg-gray-200 w-28 xl:w-60 h-5 animate-pulse rounded'></h1>
                    <h1 className='bg-gray-200 w-20 xl:w-48 h-5 animate-pulse rounded'></h1>
                </div>
                <h1 className='bg-gray-200 hidden md:block w-28 rounded-full h-8 animate-pulse'></h1>
            </div>


            <div className={`px-2 md:px-5 py-5 rounded-b-xl`}>
                <div className='w-full h-20 lg:h-40 bg-gray-200 animate-pulse'></div>
                <div className={`grid grid-cols-${numColumns} gap-2 md:gap-5 mt-4`}>
                    {
                        Array(numColumns).fill().map((_, idx) =>
                            <div
                                key={idx}
                                className='w-full h-80 lg:h-96 rounded-md border border-gray-200 animate-pulse'
                            >
                                <div className='w-full h-48 lg:h-60 rounded-md bg-gray-200 animate-pulse'></div>
                                <div className='flex flex-col items-center gap-4 mt-4'>
                                    <h1 className='bg-gray-200 w-full rounded-full h-5 animate-pulse'></h1>
                                    <h1 className='bg-gray-200 w-20 rounded-full h-5 animate-pulse'></h1>
                                    <h1 className='bg-gray-200 w-20 rounded-full h-5 animate-pulse'></h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FlashSaleLoader;