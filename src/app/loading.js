import Preloader from '@/utility/preloader/Preloader';
import React from 'react';

const loading = () => {
    return (
        <div className='flex items-center justify-center h-screen w-full'>
            <Preloader />
        </div>
    );
};

export default loading;