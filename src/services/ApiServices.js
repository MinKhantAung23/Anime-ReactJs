import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiServices = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    }),
    endpoints: (builder) => ({}),
})