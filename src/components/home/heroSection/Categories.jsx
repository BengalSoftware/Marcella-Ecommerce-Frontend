import { getAllCategory } from '@/lib/categories/categoriesApi';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Categories = async () => {
    const data = await getAllCategory();
    return (
        <div className='bg-white rounded-md'>
            <ul className='relative py-2'>
                {
                    data?.result?.map(category => category?.children?.length > 0 ?
                        <li
                            key={category?._id}
                            className='group'>

                            <Link href={`/products?category=${category?.slug}`} className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>{category?.title}</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
                            {/* sub menu  */}
                            <ul className='absolute left-full bg-white w-full top-0 hidden group-hover:block py-2 h-full z-50'>
                                {
                                    category?.children?.map(subCat => subCat?.children?.length > 0 ?
                                        <li key={subCat?._id} className='group/sub'>
                                            <Link href={`/products?category=${subCat?.slug}`} className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>{subCat?.title}</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
                                            {/* sub menu child  */}
                                            <ul className='absolute left-full bg-white w-full top-0 hidden group-hover/sub:block py-2 h-full'>
                                                {
                                                    subCat?.children?.map(subCatChild =>
                                                        <li key={subCatChild?._id}>
                                                            <Link href={`/products?category=${subCatChild?.slug}`} className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>{subCatChild?.title}</span></Link>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </li> :
                                        <li key={subCat?._id}>
                                            <Link href={`/products?category=${subCat?.slug}`} className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>{subCat?.title}</span></Link>
                                        </li>
                                    )
                                }

                            </ul>
                        </li> : <li key={category?._id}>
                            <Link href={`/products?category=${category?.slug}`} className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>{category?.title}</span></Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Categories;





















// {
//     Array(12).fill().map((_, idx) =>
//         <li key={idx} className='group'>
//             <Link href='/products' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Womens & Girls Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//             {/* sub menu  */}
//             <ul className='absolute left-full bg-white w-full top-0 hidden group-hover:block py-2 h-full z-50'>
//                 <li>
//                     <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                 </li>
//                 <li>
//                     <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                 </li>
//                 <li>
//                     <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                 </li>
//                 <li>
//                     <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                 </li>
//                 {/* sub menu child */}
//                 <li className='group/sub'>
//                     <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                     <ul className='absolute left-full bg-white w-full top-0 hidden group-hover/sub:block py-2 h-full'>
//                         <li>
//                             <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                         </li>
//                         <li>
//                             <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                         </li>
//                         <li>
//                             <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                         </li>
//                         <li>
//                             <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                         </li>
//                         <li>
//                             <Link href='/' className='flex items-center justify-between pl-4 py-1.5 text-xs xl:text-sm text-dark hover:bg-gray-100'> <span className='line-clamp-1'>Mens & Fashion</span> <IoIosArrowForward className='text-primary mr-4' /></Link>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </li>
//     )
// }