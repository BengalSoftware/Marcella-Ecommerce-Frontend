import React from 'react';
import Image from 'next/image';


const ProductImage = ({ images }) => {
    return (
        <div className='w-full'>
            <Image className='w-full' quality={100} height={1080} width={1200} src={images?.[0]} alt='detail' />

            <div className='flex items-center gap-4 w-full overflow-x-scroll seller-scrollbar'>
                {
                    images?.map(img =>
                        <Image
                            width={100}
                            height={100}
                            className='w-20 border rounded-md'
                            quality={100}
                            src={img}
                            alt='detail' />
                    )
                }
            </div>
        </div>
    );
};

export default ProductImage;