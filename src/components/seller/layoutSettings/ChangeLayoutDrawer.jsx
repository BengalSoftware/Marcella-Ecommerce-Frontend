'use client'
import LayoutButton1 from '@/components/shop/layoutButton/LayoutButton1';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { createAndUpdateLayoutMutation } from '@/lib/layoutApi/layoutApi';
import { Drawer } from 'antd';
import React, { useContext, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';

const ChangeLayoutDrawer = () => {
    const [open, setOpen] = useState(false)
    const { seller } = useContext(AuthContext);
    const { setUpdateLayout, activeLayout, setActiveLayout } = useContext(StateContext);
    

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
                    setActiveLayout(id)
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
                className='px-4'
                closeIcon={null}
                extra={
                    <button onClick={handleClose} className='text-2xl border border-white hover:border-dark'>
                        <HiXMark />
                    </button>
                }
            >
                <button onClick={() => handleUpdateLayout(1)} className={`${activeLayout === 1 ? 'bg-primary' : 'bg-dark'} text-white ease-in-out duration-500 p-2 rounded-md mb-5`}>
                    <LayoutButton1 activeLayout={activeLayout} />
                </button>
                <button onClick={() => handleUpdateLayout(2)} className={`${activeLayout === 2 ? 'bg-primary' : 'bg-dark'} text-white ease-in-out duration-500 p-2 rounded-md mb-5`}>
                    <LayoutButton1 />
                </button>
                <button onClick={() => handleUpdateLayout(3)} className={`${activeLayout === 3 ? 'bg-primary' : 'bg-dark'} text-white ease-in-out duration-500 p-2 rounded-md mb-5`}>
                    <LayoutButton1 />
                </button>

            </Drawer>
        </div>
    );
};

export default ChangeLayoutDrawer;