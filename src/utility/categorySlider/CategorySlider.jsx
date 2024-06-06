'use client'
import React from 'react';
import Slider from 'react-slick';
import { categorySettings } from '../sliderSettings/categorySettings';

const CategorySlider = ({ children }) => {
    return (
        <Slider {...categorySettings}>
            {children}
        </Slider>
    );
};

export default CategorySlider;