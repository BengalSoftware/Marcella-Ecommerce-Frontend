'use client'
import React, { useEffect, useState } from 'react';
import RatingReviews from './RatingReviews';
import { getAllReviewsByProductId } from '@/lib/review/reviewApi';
import ReviewsCard from './ReviewsCard';

const ReviewRatingIndex = ({ product }) => {
    const [allReviews, setAllreviews] = useState(null)

   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllReviewsByProductId(product?.slug);
                if (res) {
                    setAllreviews(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <RatingReviews product={product} />
            {
                allReviews?.map(review =>
                    <ReviewsCard
                        review={review}
                        key={review?._id}
                    />
                )
            }
        </div>
    );
};

export default ReviewRatingIndex;