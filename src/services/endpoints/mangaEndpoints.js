import { ApiServices } from "../ApiServices";

const mangaEndpoints = ApiServices.injectEndpoints({
    endpoints: (builder) => ({
        getManga: builder.query({
            query: ({ page = 1, limit = 20 }) => `manga?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,

        }),
        getTopManga: builder.query({
            query: ({ page = 1, limit = 20 }) => `/top/manga?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        getRecommendationsManga: builder.query({
            query: ({ page = 1, limit = 20 }) => `/recommendations/manga?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        getMangaDetail: builder.query({
            query: (id) => `/manga/${id}`,
            keepUnusedDataFor: 300,
        }),
        getMangaCharactesById: builder.query({
            query: (id) => `manga/${id}/characters`,
            keepUnusedDataFor: 300
        }),
        getMangaRecommendationsById: builder.query({
            query: (id) => `manga/${id}/recommendations`,
            keepUnusedDataFor: 300
        }),
        getMangaRelationsById: builder.query({
            query: (id) => `manga/${id}/relations`,
            keepUnusedDataFor: 300,
        }),
        getMangaReviewsById: builder.query({
            query: (id) => `manga/${id}/reviews`,
            keepUnusedDataFor: 300,
        }),
        getMangaPicturesById: builder.query({
            query: (id) => `manga/${id}/pictures`,
            keepUnusedDataFor: 300,
        }),
    })
})

export const {
    useGetMangaQuery,
    useGetTopMangaQuery,
    useGetRecommendationsMangaQuery,
    useGetMangaDetailQuery,
    useGetMangaCharactesByIdQuery,
    useGetMangaRecommendationsByIdQuery,
    useGetMangaRelationsByIdQuery,
    useGetMangaReviewsByIdQuery,
    useGetMangaPicturesByIdQuery
} = mangaEndpoints;