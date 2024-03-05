'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { addSingleReview } from '@/lib/review/reviewApi';
import { Modal } from 'antd';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const WriteReview = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [reviewLoading, setReviewLoading] = useState(false);
    const { user } = useContext(AuthContext);


    const handleSubmitReview = async (e) => {
        e.preventDefault();
        const data = {
            rating: rating || '5',
            description: review,
            product: id
        }
        try {
            setReviewLoading(true)
            if (user?.data?.user?.email) {
                const response = await addSingleReview(user?.data?.user?.email, data);
                if (response) {
                    setModalOpen(false)
                    toast.success('Review Added Successfull')
                }
            }

        } catch (error) {
            console.error(error)
        }
        finally {
            setReviewLoading(false)
        }
        e.target.reset();
    }


    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='bg-primary hover:bg-dark px-4 py-1 rounded-full text-white text-[10px]'>Review</button>
            <Modal
                title="What would you rate this product?"
                centered
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={false}
            >
                <div>
                    <form onSubmit={handleSubmitReview}>
                        <div className='flex items-center justify-center'>
                            <div className="rate">
                                <input onChange={(e) => setRating(e.target.value)} type="radio" id="star5" name="rate" value="5" defaultChecked />
                                <label htmlFor="star5" title="5">5 stars</label>
                                <input onChange={(e) => setRating(e.target.value)} type="radio" id="star4" name="rate" value="4" />
                                <label htmlFor="star4" title="4">4 stars</label>
                                <input onChange={(e) => setRating(e.target.value)} type="radio" id="star3" name="rate" value="3" />
                                <label htmlFor="star3" title="3">3 stars</label>
                                <input onChange={(e) => setRating(e.target.value)} type="radio" id="star2" name="rate" value="2" />
                                <label htmlFor="star2" title="2">2 stars</label>
                                <input onChange={(e) => setRating(e.target.value)} type="radio" id="star1" name="rate" value="1" />
                                <label htmlFor="star1" title="1">1 star</label>
                            </div>
                        </div>

                        <textarea onChange={(e) => setReview(e.target.value)} className='border placeholder:text-sm placeholder:italic border-gray-600 outline-none w-full p-4 my-4' name="" id="" cols="60" rows="3" placeholder='Write a Reivew'></textarea>
                        <div className='flex items-center justify-end'>
                            <button className='bg-primary hover:bg-dark px-4 py-1 rounded-md text-white'>{reviewLoading ? 'Review..' : 'Review'}</button>
                        </div>
                    </form>
                    <h1 className='font-medium text-gray-800'>Tell us your feedback about the product</h1>
                </div>
            </Modal>
        </div>
    );
};

export default WriteReview;