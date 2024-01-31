import { Drawer, Menu } from 'antd';
import React, { useState } from 'react';
function getItem(label, key, children, type) {
    return {
        key,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Womens And Fashion', 'sub1', [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Mens And Fashion', 'sub2', [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Clothing', 'sub3',
            // sub menu child 
            [
                getItem('Option 7', '7'),
                getItem('Option 8', '8')
            ]),
    ]),
    getItem('Electronics Devices', 'sub4', [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const MobileNav = ({ open, setOpen }) => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };


    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Drawer
                title="Categories"
                placement={'left'}
                onClose={handleClose}
                open={open}
                className='hidden'
            >
                <Menu
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={items}
                />
            </Drawer>
        </div>
    );
};

export default MobileNav;