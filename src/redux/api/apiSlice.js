import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:8000/v1",
        // baseUrl: "http://192.168.0.224:8000/v1",
        baseUrl: "https://server-marcella.onrender.com/v1",
    }),
    tagTypes: ["AddCartData"],
    endpoints: (build) => ({}),
});