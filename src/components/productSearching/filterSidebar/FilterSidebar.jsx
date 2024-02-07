import React from 'react';
import FilterAccordion from '../filterAccordion/FilterAccordion';
import Link from 'next/link';

const FilterSidebar = () => {
    return (
        <div>
            {/* categories  */}
            <FilterAccordion
                title={'All Categories'}
            >
                <ul className='py-2'>
                    {
                        Array(12).fill().map((_, idx) =>
                            <li key={idx}>
                                <Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t'>Men's and Fashion</Link>
                            </li>
                        )
                    }
                </ul>
            </FilterAccordion>

            {/* brands  */}
            <FilterAccordion
                title={'All Brands'}
            >
                <ul className='py-2'>
                    {
                        Array(5).fill().map((_, idx) =>
                            <li key={idx}>
                                <Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t'>Gucci</Link>
                            </li>
                        )
                    }
                </ul>
            </FilterAccordion>


            {/* Size  */}
            <FilterAccordion
                title={'Size'}
            >
                <ul className='py-2'>
                    <li><Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t uppercase'>S</Link></li>
                    <li><Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t uppercase'>M</Link></li>
                    <li><Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t uppercase'>L</Link></li>
                    <li><Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t uppercase'>XL</Link></li>
                    <li><Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t uppercase'>XXL</Link></li>
                    <li><Link href='/' className='w-full block rounded px-4 py-2 text-sm text-dark hover:bg-secondary border-t uppercase'>XXXL</Link></li>
                </ul>
            </FilterAccordion>


            {/* Color  */}
            <FilterAccordion
                title={'Color'}
            >
                <ul className='py-2 grid grid-cols-3 gap-2 mx-2'>
                    <li><Link href='' className='w-full block bg-red-500 h-5 rounded'></Link></li>
                    <li><Link href='' className='w-full block bg-black h-5 rounded'></Link></li>
                    <li><Link href='' className='w-full block bg-yellow-500 h-5 rounded'></Link></li>
                    <li><Link href='' className='w-full block bg-blue-500 h-5 rounded'></Link></li>
                    <li><Link href='' className='w-full block bg-purple-500 h-5 rounded'></Link></li>
                </ul>
            </FilterAccordion>


            {/* Price  */}
            <FilterAccordion
                title={'Price'}
            >
                <div className='px-4 pt-2 pb-4 flex items-center justify-between gap-2'>
                    <input className='border outline-none p-1 rounded-md placeholder:text-sm w-full' type="number" placeholder='Min' name="min" id="" />
                    <input className='border outline-none p-1 rounded-md placeholder:text-sm w-full' type="number" placeholder='Max' name="max" id="" />
                    <button className='bg-primary rounded-md px-4 py-1.5 text-sm text-white hover:bg-dark'>Apply</button>
                </div>
            </FilterAccordion>

        </div>
    );
};

export default FilterSidebar;