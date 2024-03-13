import React from 'react';

const FlashProductHeader = ({ query, flashType, handleNavTab }) => {

    return (
        <div className='flex items-center mx-5'>
            {
                flashType?.data?.map(offer =>
                    <button
                        key={offer?._id}
                        onClick={() => handleNavTab(offer?.name)}
                        className={`px-4 py-2.5 text-sm ${(query ? (offer?.name === query) : (offer?.name === flashType?.data?.[0]?.name)) ? 'border rounded-t-lg border-b-0 bg-secondary' : ''}`}>{offer?.name}</button>
                )
            }
        </div>
    );
};

export default FlashProductHeader;