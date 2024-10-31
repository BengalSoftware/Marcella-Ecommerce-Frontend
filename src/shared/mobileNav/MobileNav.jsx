'use client'
import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import MobileCategories from './MobileCategories';
import { getAllCategory } from '@/lib/categories/categoriesApi';


const MobileNav = ({ open, setOpen }) => {
    const [categories, setCategories] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllCategory();
                if (res?.result) {
                    setCategories(res?.result)
                }
            } catch (error) {
                console.error(error)
            }
        }
        if (open) {
            fetchData()
        }
    }, [open])
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Drawer
                title="Categories"
                placement={'left'}
                onClose={handleClose}
                open={open}
                closeIcon={null}
                extra={
                    <button onClick={handleClose} className='text-2xl border border-white hover:border-dark'>
                        <HiXMark />
                    </button>
                }
                autoFocus={true}
                mask={false}
                width={256}
            >
                <MobileCategories categories={categories} setOpen={setOpen} />
            </Drawer>
        </div>
    );
};

export default MobileNav;
