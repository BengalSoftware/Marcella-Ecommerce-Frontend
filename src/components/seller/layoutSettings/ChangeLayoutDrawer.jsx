'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { createAndUpdateLayoutMutation } from '@/lib/layoutApi/layoutApi';
import { Drawer } from 'antd';
import React, { useContext, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';

const ChangeLayoutDrawer = () => {
    const [open, setOpen] = useState(false)
    const { seller } = useContext(AuthContext);
    const { setUpdateLayout } = useContext(StateContext)

    const handleClose = () => {
        setOpen(false);
    };


    const handleUpdateLayout = async (id) => {
        try {
            const data = {
                name: "layout",
                email: seller?.user?.email,
                selected: id
            }
            if (seller?.data?.user?.email) {
                const res = await createAndUpdateLayoutMutation(seller?.data?.user?.email, data);
                if (res) {
                    setUpdateLayout(true)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

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
                <button onClick={() => handleUpdateLayout(1)} className='text-xs bg-primary hover:bg-dark text-white ease-in-out duration-500 px-4 py-2 rounded-md'>1</button>
                <button onClick={() => handleUpdateLayout(2)} className='text-xs bg-primary hover:bg-dark text-white ease-in-out duration-500 px-4 py-2 rounded-md'>2</button>
                <button onClick={() => handleUpdateLayout(3)} className='text-xs bg-primary hover:bg-dark text-white ease-in-out duration-500 px-4 py-2 rounded-md'>3</button>
            </Drawer>
        </div>
    );
};

export default ChangeLayoutDrawer;