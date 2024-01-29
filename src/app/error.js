'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col items-center my-40'>
            <h2 className='md:text-3xl'>Something went wrong!</h2>
            <button
                className='px-6 py-2 rounded-md bg-secondary text-white hover:bg-primary mt-10'
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}