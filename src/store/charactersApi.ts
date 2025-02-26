import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacter, IResponse } from "../utils/types";
import { apiKeyOneApi } from "../utils/api";
import { LIMIT_PER_PAGE } from "../const/const";

const BASE_URL = "https://the-one-api.dev/v2/";

const baseQueryValue = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${apiKeyOneApi}`);
        return headers;
    },
});

export const charactersApi = createApi({
    reducerPath: "characterApi",
    baseQuery: baseQueryValue,
    endpoints: (builder) => ({
        getCharacters: builder.query<
            {
                characters: ICharacter[];
                offset: string;
                pages: string;
                page: string;
                total: string;
            },
            { searchQuery: string; page?: number }
        >({
            query: ({ searchQuery, page }) => {
                const queryValue = searchQuery.trim();
                const pageParam = page ? `&page=${page}` : "";
                return `character?name=/${queryValue}/i&limit=${LIMIT_PER_PAGE}${pageParam}`;
            },
            transformResponse: (response: IResponse) => {
                const characters = response?.docs || [];
                const offset = response.offset;
                const pages = response.pages;
                const page = response.page;
                const total = response.total;
                return { characters, offset, pages, page, total };
            },
        }),
        getCharacterById: builder.query<ICharacter, number | null>({
            query: (id) => {
                if (id === null) {
                    return ``;
                }
                return `character/${id}`;
            },
            transformResponse: (response: IResponse) => {
                const characters = response?.docs || [];
                return characters[0];
            },
        }),
    }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
