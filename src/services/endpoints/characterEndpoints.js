import { ApiServices } from "../ApiServices";

const characterEndpoints = ApiServices.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ page = 1, limit = 10 }) =>
        `/top/characters?page=${page}&limit=${limit}`,
      keepUnusedDataFor: 300,
    }),
    getCharacterDetail: builder.query({
      query: (id) => `/characters/${id}`,
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterDetailQuery } = characterEndpoints;
