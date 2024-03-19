import React from 'react';

const LoadmoreLoader = () => {
    return (
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5'>
            {
                Array(10).fill().map((_, idx) => (
                    <div key={idx}>
                        <div className='relative group'>
                            <div>
                                <div className='bg-white rounded-lg cursor-pointer relative shadow'>
                                    <p className='bg-gray-300 w-1/3 animate-pulse absolute text-white top-0 left-0 rounded-tl-lg rounded-br-lg text-xs md:text-sm px-4 py-2 z-50'></p>
                                    <div className='overflow-hidden animate-pulse rounded-t-lg h-48 bg-gray-200'></div>
                                    <div className='p-2'>
                                        <p className='line-clamp-2 animate-pulse bg-gray-200 h-2 text-xs lg:text-sm 2xl:text-base text-center'></p>
                                        <p className='line-clamp-2 animate-pulse bg-gray-200 h-2 text-xs lg:text-sm 2xl:text-base text-center mt-2'></p>
                                        <p className='text-center animate-pulse bg-gray-200 h-2 w-1/3 mx-auto mt-2 font-medium text-primary'></p>
                                        <p className='text-center animate-pulse bg-gray-200 mt-2 rounded-full border w-fit mx-auto text-sm px-3 py-1 font-medium'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default LoadmoreLoader;