import { ApiServices } from "../ApiServices";

const watchVideoEndpoints = ApiServices.injectEndpoints({
    endpoints: (builder) => ({
        watchRecent: builder.query({
            query: ({ page = 1, limit = 10 }) => `/watch/episodes?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        watchPopular: builder.query({
            query: ({ page = 1, limit = 10 }) => `/watch/popular?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        watchTrailer: builder.query({
            query: ({ page = 1, limit = 10 }) => `/watch/promos?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
    })
})

export const {
    useWatchRecentQuery,
    useWatchPopularQuery,
    useWatchTrailerQuery
} = watchVideoEndpoints