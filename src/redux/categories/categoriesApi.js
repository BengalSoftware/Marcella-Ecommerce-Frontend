import { apiSlice } from "../api/apiSlice";

export const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //get all  category
        getAllCategory: builder.query({
            query: () => ({
                url: `/category`,
                method: "GET",
            }),
        }),

    }),
});

export const {
    useGetAllCategoryQuery,
} = categoriesApi;