'use client'
import React, { useContext, useState } from 'react';
import { MdDiscount } from "react-icons/md";
import Rating from '../rating/Rating';
import { FiMinus, FiPlus } from "react-icons/fi";
import toast from 'react-hot-toast';
import WishlistButtonAndShare from './WishlistButtonAndShare';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { addToCartDataByEmail } from '@/lib/addToCartApi/addToCartApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const ProductDescription = ({ product }) => {
    const [productQty, setProductQty] = useState(1);
    const { user } = useContext(AuthContext);
    const { setCartSuccess, setCartDrawerOpen } = useContext(StateContext);
    const [cartLoading, setCartLoading] = useState(false)
    const { name, categories, numReviews, totalRating, quantity, price, offerPrice, color, size, manufacturer, status } = product || {};
    const [sizePrice, setSizePrice] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null)
    const router = useRouter();

    const handleQtyIncrement = () => {
        const newQty = productQty + 1;
        setProductQty(newQty)
    }

    const handleQtyDecrement = () => {
        const newQty = productQty - 1;
        if (productQty <= 1) {
            toast.error('Select a minimum of one product');
        } else {
            setProductQty(newQty);
        }
    }



    // handle add to cart 
    const handelAddToCart = async () => {
        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: product?._id,
                sellerId: product?.sellerId,
                offerPrice: product?.offerPrice,
                quantity: productQty,
                color: selectedColor,
                size: selectedSize
            };
        } else {
            toast.error(<Link href='/login'>Please Signin Your Account</Link>)
        }
        try {
            setCartLoading(true)
            const res = await addToCartDataByEmail(user?.data?.user?.email, data);
            if (res) {
                toast.success('Cart Added Successfull')
                setCartSuccess(true)
                setCartDrawerOpen(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setCartLoading(false)
        }
    }

    return (
        <div>
            <h1 className='text-lg lg:text-xl font-medium text-dark'>{name}</h1>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='mt-2 text-sm lg:text-base'>Brand: {manufacturer?.name ? manufacturer?.name : 'No Brands'}</p>
                    {
                        categories?.map(category =>
                            <p key={category?._id} className='mt-2 text-sm lg:text-base'>Category: {category?.name}</p>
                        )
                    }
                </div>
                <WishlistButtonAndShare product={product} />
            </div>
            <div className='flex items-end justify-between mt-5'>
                <span>
                    <p className='line-through'>BDT {offerPrice && (sizePrice ? sizePrice * price : price)}</p>
                    <h1 className='text-dark font-semibold text-2xl lg:text-3xl mt-3'>BDT {offerPrice && (sizePrice ? sizePrice * offerPrice : offerPrice)}</h1>
                </span>
                <p className='bg-primary text-white text-xs w-fit rounded-full px-2 py-0.5 flex items-center gap-1'><MdDiscount /> -BDT {sizePrice ? ((sizePrice * price) - (sizePrice * offerPrice)) : (price - offerPrice)}</p>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <Rating rate={totalRating} />
                <p className='text-xs'>{numReviews} reviews</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p>Color: </p>
                {
                    color?.map(col =>
                        <button onClick={() => setSelectedColor(col?._id?.name)} key={col?._id} className={`h-5 w-5 rounded-full ${selectedColor === col?._id?.name ? 'border border-black' : ''}`} style={{ backgroundColor: col?._id?.colorCode }}></button>
                    )
                }
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <p>Size: </p>
                {
                    size?.map(sz =>
                        <button onClick={() => setSelectedSize(sz?.name)} key={sz?._id} className={`text-sm text-dark px-2 ${selectedSize === sz?.name ? 'border border-black' : ''}`}>{sz?.name}</button>
                        // <button onClick={() => setSizePrice(parseFloat(sz?.name))} key={sz?._id} className={`text-sm text-dark px-2 ${sizePrice === parseFloat(sz?.name) ? 'border border-primary' : ''}`}>{sz?.name}</button>
                    )
                }
            </div>

            <div className='mt-4 flex items-center gap-5'>
                <p className='text-dark'>Quantity</p>
                <div className='flex items-center border w-fit rounded-md'>
                    <button onClick={handleQtyDecrement} className='border-r text-2xl bg-white rounded-l-md p-1'>
                        <FiMinus />
                    </button>
                    <p className='w-16 text-center'>{productQty}</p>
                    <button onClick={handleQtyIncrement} className='border-l text-2xl bg-white rounded-r-md p-1'>
                        <FiPlus />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-between md:gap-x-20 mt-4'>
                <button disabled={status === 'OUT-OF-STOCK'} onClick={handelAddToCart} className={`${(status === 'OUT-OF-STOCK') ? 'cursor-not-allowed bg-primary opacity-50' : 'bg-primary hover:bg-dark'}  text-white px-10 lg:px-16 py-2 lg:py-3 rounded-md  ease-in-out duration-500`}>{cartLoading ? 'Loading..' : 'Add to Cart'}</button>
                <p className='text-sm font-light'>{(status === 'IN-STOCK') ? `Stock: ${quantity}` : status}</p>
            </div>
        </div>
    );
};

export default ProductDescription;