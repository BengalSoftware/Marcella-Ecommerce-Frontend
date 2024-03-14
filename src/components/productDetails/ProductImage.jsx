'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ReactImageMagnify from 'react-image-magnify';


const ProductImage = ({ dImages }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <div className='w-full'>
            <div >
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'details',
                        isFluidWidth: true,
                        src: dImages?.[selectedImage],
                    },
                    largeImage: {
                        src: dImages?.[selectedImage],
                        width: 400,
                        height: 1100
                    }
                }} />
            </div>

            <div className='flex items-center gap-2 w-full overflow-x-scroll seller-scrollbar'>
                {
                    dImages?.map((img, idx) =>
                        <div key={img}>
                            <Image
                                onMouseOver={() => setSelectedImage(idx)}
                                width={100}
                                height={100}
                                className={`w-16 mt-4 border rounded-md cursor-pointer ${selectedImage === idx ? 'border border-primary' : ''}`}
                                quality={100}
                                src={img}
                                alt='detail'
                            />
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default ProductImage;