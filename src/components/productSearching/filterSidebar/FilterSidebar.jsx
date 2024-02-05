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