import { ApiServices } from "../ApiServices";

const searchEndpoints = ApiServices.injectEndpoints({
    endpoints: (builder) => ({
        searchAnime: builder.query({
            query: (search) => `anime?q=${search}`,
        }),
        searchManga: builder.query({
            query: (search) => `manga?q=${search}`,
        })
    }),
});

export const { useSearchAnimeQuery, useSearchMangaQuery } = searchEndpoints