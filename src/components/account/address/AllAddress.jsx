import React from 'react';
import AddressCard from './AddressCard';

const AllAddress = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                Array(4).fill().map((_, idx) =>
                    <AddressCard
                        key={idx}
                    />
                )
            }
        </div>
    );
};

export default AllAddress;