import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacter, IResponse } from "../utils/types";
import { apiKeyOneApi } from "../utils/api";

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
        getCharacters: builder.query<ICharacter[], string>({
            query: (search: string) => `character?name=/${search}/i`,
            transformResponse: (response: IResponse) => response?.docs || [],
        }),
    }),
});

export const { useGetCharactersQuery } = charactersApi;
