import { baseUrl, token } from "../api/baseUrl";

// get all product 
const getAllProduct = async (page) => {
    try {
        const res = await fetch(`${baseUrl}/product?page=${page}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// get all product by query
const getAllProductByQuery = async (queryUrl) => {
    try {
        const res = await fetch(`${baseUrl}/product${queryUrl}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// get product type 
const getProductByProductType = async (productType) => {
    try {
        const res = await fetch(`${baseUrl}/product/productType/${productType}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


// get single product 
const getSingleProduct = async (slug) => {
    try {
        const res = await fetch(`${baseUrl}/product/${slug}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// get single product 
const getSingleProductDetails = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/product/admin/${id}`,
            {
                headers: {
                    'Authorization': token
                },
            })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


// get related product 
const getRelatedProduct = async (slug) => {
    try {
        const res = await fetch(`${baseUrl}/product/related-products/${slug}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


// get seller product 
const getSellerProduct = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/product/seller-products/${id}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
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


//  product searchSuggestion
const productSearchSuggestion = async (queryUrl) => {
    try {
        const res = await fetch(`${baseUrl}/product/searchSuggestion?search=${queryUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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

// get all produc type options 
const getAllProductTypeOptions = async () => {
    try {
        const res = await fetch(`${baseUrl}/product-type`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
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
    getSingleProductDetails,
    productSearchSuggestion,
    getAllProductTypeOptions
}
