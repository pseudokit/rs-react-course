import axios from "axios";
import { ICharacter, IResponse } from "./types";
import { arr } from "./localData";
import { LIMIT_PER_PAGE } from "../const/const";

export const baseUrlOneApi = `https://the-one-api.dev/v2/`;

//export const apiKeyOneApi = "b6e1nvsD0GNASWX-IMmV";
//export const apiKeyOneApi = "uT6V40d3X9HaqHYEppBz";
export const apiKeyOneApi = "CGtS8kroA8EQxHeMQzDh";

export const getCharactersPerPage = async (search: string, page: number): Promise<ICharacter[]> => {
    const response = await axios.get(
        `${baseUrlOneApi}character?name=/${search}/i&limit=${LIMIT_PER_PAGE}&page=${page}`,
        {
            headers: { Authorization: `Bearer ${apiKeyOneApi}` },
        },
    );
    const data: IResponse = response.data;
    console.log(data);
    return data.docs;
};

export const getWithAxiosCharacters = async (search: string): Promise<ICharacter[]> => {
    const response = await axios.get(`${baseUrlOneApi}character?name=/${search}/i`, {
        headers: { Authorization: `Bearer ${apiKeyOneApi}` },
    });
    const data: IResponse = response.data;
    return data.docs;
    //return arr;
};

export const getCharacterById = async (id: string) => {
    const response = await axios.get(`${baseUrlOneApi}character/${id}`, {
        headers: { Authorization: `Bearer ${apiKeyOneApi}` },
    });
    const data: IResponse = response.data;
    //console.log(data);
    return data.docs;
};
