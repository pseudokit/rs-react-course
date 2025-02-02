import axios from 'axios';
import { ICharacter, IResponse } from './types';

export const baseUrlOneApi = `https://the-one-api.dev/v2/`;

export const apiKeyOneApi = 'YOU_API';
interface IData {
  docs: Array<ICharacter>;
  limit: string;
  offset: string;
  page: string;
  pages: string;
  total: string;
}

export const getWithAxiosCharacters = async (
  search: string
): Promise<ICharacter[]> => {
  const response = await axios.get(
    //`${baseUrlOneApi}character?name=/${search}/i&limit=${10}&page=2`,
    `${baseUrlOneApi}character?name=/${search}/i&limit=${10}&page=1`,
    {
      headers: { Authorization: `Bearer ${apiKeyOneApi}` },
    }
  );
  const data: IResponse = response.data;
  console.log(data);
  return data.docs;
};

export const getCharacters = async (search: string): Promise<IResponse> => {
  const response = await fetch(
    `${baseUrlOneApi}character?name=/${search}/i&limit=10&page=1`,
    {
      headers: { Authorization: `Bearer ${apiKeyOneApi}` },
    }
  );

  const data = await response.json();
  return data;
};
