'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import DetailsImageSlider from '@/utility/detailsImageSlider/DetailsImageSlider';
import { useMouseOverZoom } from '@/hook/hooks';


const ProductImage = ({ dImages }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [hover, setHover] = useState(false);
    const source = useRef(null);
    const target = useRef(null);
    const cursor = useRef(null);


    useMouseOverZoom(source, target, cursor);
    return (
        <div className='w-full'>
            <div className="flex  gap-4 static justify-center lg:absolute">
                <div className="flex  relative z-10  overflow-hidden">
                    <div className="flex flex-wrap flex-col max-w-[300px]  gap-2">
                        <div className="bg-center bg-[#ccd8d8]  h-[300px] bg-contain w-full">
                            <Image
                                quality={100}
                                width={1200}
                                height={1080}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                ref={source}
                                src={dImages?.[selectedImage]}
                                className="w-full h-full image align-middle bg-contain block text-center bg-center bg-[#f5f5f5] bg-no-repeat cursor-crosshair object-contain"
                            />
                        </div>
                        {/* small images all */}

                        {dImages?.length <= 5 ?
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

                            </div> :
                            <DetailsImageSlider>
                                {
                                    dImages?.map((img, idx) =>
                                        <div key={img} className='px-1'>
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
                            </DetailsImageSlider>
                        }
                    </div>

                    <div
                        ref={cursor}
                        className="border border-primary absolute pointer-events-none"
                    />
                    <canvas
                        ref={target}
                        className={`${hover ? 'block' : 'hidden'
                            } ml-4 relative top-0 z-30 lg:h-[450px] lg:w-[555px] hidden ${hover && 'lg:block'
                            }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductImage;