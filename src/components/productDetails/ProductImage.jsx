import React from 'react';
// import img from '../../../public/assets/product.webp'
import Image from 'next/image';


const ProductImage = ({ dImages }) => {
    return (
        <div className='w-full'>
            <div>
                <Image className='w-full' quality={100} height={1080} width={1200} src={dImages?.[0]} alt='detail' />
            </div>

            <div className='flex items-center gap-4 w-full overflow-x-scroll seller-scrollbar'>
                {
                    dImages?.map(img =>
                        <div key={img}>
                            <Image
                                width={100}
                                height={100}
                                className='w-20 border rounded-md'
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