const { baseUrl } = require("../api/baseUrl");

const addCouponMutation = async (data) => {
    try {
        const res = await fetch(`${baseUrl}/coupon/verify/${data.email}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            
        return res.json();
    } catch (error) {
        console.error(error)
    }
};

export {
    addCouponMutation
}