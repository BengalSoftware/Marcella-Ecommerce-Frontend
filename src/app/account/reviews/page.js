'use client'
import ReviewCard from '@/components/account/reviews/ReviewCard';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getAllReviewsByEmail } from '@/lib/review/reviewApi';
import React, { useContext, useEffect, useState } from 'react';

const AccountReviewPage = () => {
    const [allReviews, setAllReviews] = useState(null);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllReviewsByEmail(user?.data?.user?.email);
                if (res) {
                    setAllReviews(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [user?.data?.user?.email])

   

    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <h1 className='text-xl font-medium pb-4 border-dashed border-b border-b-primary'>My Reviews</h1>

            {
                allReviews?.length > 0 ?
                    allReviews?.map(review =>
                        <ReviewCard
                            key={review?._id}
                            review={review}
                        />
                    ) :
                    <div className='text-center mt-5'>
                        <p>No Review Found</p>
                    </div>
            }
        </div>
    );
};

export default AccountReviewPage;