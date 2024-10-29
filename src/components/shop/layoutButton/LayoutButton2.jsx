import React from 'react';

const LayoutButton2 = () => {
    return (
        <div className='rounded-lg cursor-pointer'>
            <div className='flex items-center gap-x-2'>
                <div className='bg-secondary w-full h-16 text-center text-xl font-medium flex items-center justify-center text-gray-300 rounded-md'>Banner</div>
                <div className='bg-secondary w-full h-16 text-center text-xl font-medium flex items-center justify-center text-gray-300 rounded-md'>Banner</div>
            </div>

            <div className='grid grid-cols-5 gap-2 mt-4'>
                {
                    Array(5).fill().map((_, idx) =>
                        <div key={idx} className='h-28 bg-secondary rounded p-1'>
                            <div className=' w-full border h-16 text-center text-sm flex items-center justify-center text-gray-300 rounded-md'>Images</div>
                            <p className='h-1 w-full bg-gray-300 rounded-sm mt-2'></p>
                            <p className='h-1 w-1/2 mx-auto bg-gray-300 rounded-sm mt-2'></p>
                            <p className='h-1 w-1/2 mx-auto bg-gray-300 rounded-sm mt-2'></p>
                        </div>
                    )
                }
            </div>

            <div className='bg-secondary w-full h-20 text-center text-xl font-medium flex items-center justify-center text-gray-300 rounded-md mt-4'>Banner</div>

            <div className='grid grid-cols-5 gap-2 mt-4'>
                {
                    Array(5).fill().map((_, idx) =>
                        <div key={idx} className='h-28 bg-secondary rounded p-1'>
                            <div className=' w-full border h-16 text-center text-sm flex items-center justify-center text-gray-300 rounded-md'>Images</div>
                            <p className='h-1 w-full bg-gray-300 rounded-sm mt-2'></p>
                            <p className='h-1 w-1/2 mx-auto bg-gray-300 rounded-sm mt-2'></p>
                            <p className='h-1 w-1/2 mx-auto bg-gray-300 rounded-sm mt-2'></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LayoutButton2;