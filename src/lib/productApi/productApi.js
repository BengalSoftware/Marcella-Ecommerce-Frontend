import { baseUrl } from "../api/baseUrl";

// get all product 
const getAllProduct = async () => {
    const res = await fetch(`${baseUrl}/product`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// get product type 
const getProductByProductType = async (productType) => {
    const res = await fetch(`${baseUrl}/product/productType/${productType}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// get single product 
const getSingleProduct = async (slug) => {
    const res = await fetch(`${baseUrl}/product/${slug}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// get related product 
const getRelatedProduct = async (slug) => {
    const res = await fetch(`${baseUrl}/product/related-products/${slug}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// add product 
const addProductMutation = async (formData) => {
    try {
        const res = await fetch(`${baseUrl}/product`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMzMWUzYTA4ZDI3MDc5MjVlZGEzM2QiLCJlbWFpbCI6ImFkbWluLm1hcmNlbGxhQGdtYWlsLmNvbSIsImlhdCI6MTcwODMyNzk1MSwiZXhwIjoxNzA4MzM1MTUxfQ.lAcWkga8puzYdwtdVhe8my_-pw9qp3l7ovuQA0dcoOE'
            },
            body: formData,
            cache: 'force-cache'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};



export {
    getAllProduct,
    getProductByProductType,
    getSingleProduct,
    getRelatedProduct,
    addProductMutation
}
