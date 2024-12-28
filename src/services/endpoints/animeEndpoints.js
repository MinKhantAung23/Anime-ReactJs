import { ApiServices } from "../ApiServices";

const animeEndpoints = ApiServices.injectEndpoints({
    endpoints: (builder) => ({
        getAnime: builder.query({
            query: ({ page = 1, limit = 20 }) => `/anime?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        getTopAnime: builder.query({
            query: ({ page = 1, limit = 20 }) => `top/anime?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        getSeasonNowAnime: builder.query({
            query: ({ page = 1, limit = 20 }) => `/seasons/now?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        getUpcomingAnime: builder.query({
            query: ({ page = 1, limit = 20 }) => `/seasons/upcoming?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        getAnimeDetail: builder.query({
            query: (id) => `/anime/${id}`,
            keepUnusedDataFor: 300,
        }),
        getAnimeCharacterById: builder.query({
            query: (id) => `anime/${id}/characters`,
            keepUnusedDataFor: 300,
        }),
        getAnimeRecommendationsById: builder.query({
            query: (id) => `anime/${id}/recommendations`,
            keepUnusedDataFor: 300,
        }),
        getAnimeRelationsById: builder.query({
            query: (id) => `anime/${id}/relations`,
            keepUnusedDataFor: 300,
        }),
        getAnimeReviewsById: builder.query({
            query: (id) => `anime/${id}/reviews`,
            keepUnusedDataFor: 300,
        }),
        getAnimePicturesById: builder.query({
            query: (id) => `anime/${id}/pictures`,
            keepUnusedDataFor: 300,
        }),
    })
})

export const {
    useGetAnimeQuery,
    useGetTopAnimeQuery,
    useGetSeasonNowAnimeQuery,
    useGetUpcomingAnimeQuery,
    useGetAnimeDetailQuery,
    useGetAnimeRecommendationsByIdQuery,
    useGetAnimeCharacterByIdQuery,
    useGetAnimeRelationsByIdQuery,
    useGetAnimeReviewsByIdQuery,
    useGetAnimePicturesByIdQuery
} = animeEndpoints