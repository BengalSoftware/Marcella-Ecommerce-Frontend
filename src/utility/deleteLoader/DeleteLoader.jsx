import React from 'react';
import './DeleteLoader.css'
import { ImSpinner9 } from "react-icons/im";
const DeleteLoader = () => {
    return (
        <div>
            <ImSpinner9 size={16} className="circle-loader" />
        </div>
    );
};

export default DeleteLoader;