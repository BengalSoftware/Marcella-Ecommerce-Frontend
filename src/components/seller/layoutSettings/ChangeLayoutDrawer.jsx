'use client'
import { Drawer } from 'antd';
import React, { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';

const ChangeLayoutDrawer = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={() => setOpen(true)} className='text-xs bg-primary hover:bg-dark text-white ease-in-out duration-500 px-4 py-2 rounded-md'>Change Layout</button>
            <Drawer
                title="Layouts"
                placement={'right'}
                onClose={handleClose}
                open={open}
                closeIcon={null}
                extra={
                    <button onClick={handleClose} className='text-2xl border border-white hover:border-dark'>
                        <HiXMark />
                    </button>
                }
            >
                <button className='text-xs bg-primary hover:bg-dark text-white ease-in-out duration-500 px-4 py-2 rounded-md'>1</button>
                <button className='text-xs bg-primary hover:bg-dark text-white ease-in-out duration-500 px-4 py-2 rounded-md'>2</button>
                <button className='text-xs bg-primary hover:bg-dark text-white ease-in-out duration-500 px-4 py-2 rounded-md'>3</button>
            </Drawer>
        </div>
    );
};

export default ChangeLayoutDrawer;