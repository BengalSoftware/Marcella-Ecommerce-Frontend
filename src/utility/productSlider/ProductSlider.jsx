'use client'
import React from 'react';
import Slider from 'react-slick';
import { productSettings } from '../sliderSettings/productSettings';

const ProductSlider = ({ children }) => {
    return (
        <Slider {...productSettings}>
            {children}
        </Slider>
    );
};

export default ProductSlider;