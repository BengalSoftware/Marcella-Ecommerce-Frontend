'use client'
import { getAllCategory } from '@/lib/categories/categoriesApi';
import React, { useEffect, useState } from 'react';

const CategoryForm = ({ updateProduct, handleChange }) => {
    const [categories, setCategoris] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllCategory();
            if (data) {
                setCategoris(data)
            }
        }
        fetchData();
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div>
                <label className='text-dark text-sm'>Categories <span className='text-red-500'>*</span></label>
                <select onChange={handleChange} required name="categories" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                    <option value="">Select</option>
                    {
                        categories?.result?.map(category =>
                            <option value={category?.title}>{category?.title}</option>
                        )
                    }
                </select>
            </div>
            <div>
                <label className='text-dark text-sm'>Subategories</label>
                <select onChange={handleChange} name="subcategories" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                    <option value="">Select</option>
                    {
                        categories?.result?.map(category => ((category?.children?.length > 0) && (updateProduct?.categories == category?.title)) &&
                            category?.children?.map(subCat =>
                                <option value={subCat?.title}>{subCat?.title}</option>
                            )
                        )
                    }
                </select>
            </div>
            <div>
                <label className='text-dark text-sm'>Subategories child</label>
                <select onChange={handleChange} name="subcategoryChildren" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                    <option value="">Select</option>
                    {
                        categories?.result?.map(category => ((category?.children?.length > 0) && (updateProduct?.categories == category?.title)) &&
                            category?.children?.map(subCat => ((subCat?.children?.length > 0) && (updateProduct?.categories == category?.title)) &&
                                subCat?.children?.map(child =>
                                    <option value={child?.title}>{child?.title}</option>
                                )
                            )
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default CategoryForm;