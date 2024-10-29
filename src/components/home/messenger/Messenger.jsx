import Link from 'next/link';
import React from 'react';
import { FacebookMessengerIcon } from 'react-share';

const Messenger = () => {
    return (
        <div className='fixed bottom-5 right-5 z-50'>
            <Link href='https://www.messenger.com/t/281453911710631' target='_blank'>
                <FacebookMessengerIcon className='rounded-full bg-gradient-to-l from-yellow-400 via-pink-500 to-purple-500' />
            </Link>
        </div>
    );
};

export default Messenger;