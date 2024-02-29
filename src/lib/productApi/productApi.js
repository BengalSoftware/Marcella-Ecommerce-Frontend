import { baseUrl, token } from "../api/baseUrl";

// get all product 
const getAllProduct = async () => {
    const res = await fetch(`${baseUrl}/product`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};

// get all product by query
const getAllProductByQuery = async (queryUrl) => {
    const res = await fetch(`${baseUrl}/product/${queryUrl}`)

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

// get single product 
const getSingleProductDetails = async (id) => {
    const res = await fetch(`${baseUrl}/product/admin/${id}`,
        {
            headers: {
                'Authorization': token
            },
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


// get seller product 
const getSellerProduct = async (id) => {
    const res = await fetch(`${baseUrl}/product/seller-products/${id}`)

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
                'Authorization': token
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


// add product 
const updateProductMutation = async (id, data) => {
    try {
        const res = await fetch(`${baseUrl}/product/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: data,
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
    getAllProductByQuery,
    getProductByProductType,
    getSingleProduct,
    getRelatedProduct,
    addProductMutation,
    getSellerProduct,
    updateProductMutation,
    getSingleProductDetails
}
