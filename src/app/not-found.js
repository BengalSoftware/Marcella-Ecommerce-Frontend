import Link from 'next/link'
import { FaRegSadCry } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className='h-[90vh] flex items-center justify-center'>
            <div className='text-center'>
                <div className='flex items-center justify-center mb-6'>
                    <FaRegSadCry className='text-center text-9xl animate-bounce' />
                </div>
                <h2 className='text-5xl font-semibold'>Not Found</h2>
                <p className='text-4xl my-10'>Could not find requested resource</p>
                <Link className='bg-g-primary rounded-md px-6 py-3 text-white hover:opacity-90' href="/">Return Home</Link>
            </div>
        </div>
    )
}