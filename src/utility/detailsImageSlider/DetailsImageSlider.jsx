'use client'
import React from 'react';
import Slider from 'react-slick';
import { detailsImageSettings } from '../sliderSettings/detailsImageSettings';

const DetailsImageSlider = ({ children }) => {
    return (
        <Slider {...detailsImageSettings}>
            {children}
        </Slider>
    );
};

export default DetailsImageSlider;