import { baseUrl } from "../api/baseUrl";

// get privacy policy
const getPrivacyPolicy = async () => {
    try {
        const res = await fetch(`${baseUrl}/privacy-policy`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};
// get privacy policy
const getTermsCondition = async () => {
    try {
        const res = await fetch(`${baseUrl}/termsCondition`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// get return refund
const getReturnRefund = async () => {
    try {
        const res = await fetch(`${baseUrl}/return`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// get return refund
const getStoreLocation = async () => {
    try {
        const res = await fetch(`${baseUrl}/storeLocation`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};
// get delivery info
const getDeliveryInfo = async () => {
    try {
        const res = await fetch(`${baseUrl}/deliveryInfo`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

export {
    getPrivacyPolicy,
    getTermsCondition,
    getReturnRefund,
    getStoreLocation,
    getDeliveryInfo
}