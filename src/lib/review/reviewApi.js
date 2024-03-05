import { baseUrl } from "../api/baseUrl";

// add single review
const addSingleReview = async (email, data) => {
    try {
        const res = await fetch(`${baseUrl}/review/${email}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


// add all reviwes by email
const getAllReviewsByEmail = async (email) => {
    try {
        const res = await fetch(`${baseUrl}/review/${email}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};



// add all reviwes by slug
const getAllReviewsByProductId = async (slug) => {
    try {
        const res = await fetch(`${baseUrl}/review/allByProductId/${slug}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

export {
    addSingleReview,
    getAllReviewsByEmail,
    getAllReviewsByProductId
}