import axios from 'axios';
import { ICharacter, IResponse } from './types';

export const baseUrlOneApi = `https://the-one-api.dev/v2/`;

export const apiKeyOneApi = 'b6e1nvsD0GNASWX-IMmV';

export const getWithAxiosCharacters = async (
  search: string
): Promise<ICharacter[]> => {
  const response = await axios.get(
    `${baseUrlOneApi}character?name=/${search}/i&limit=${30}&page=1`,
    {
      headers: { Authorization: `Bearer ${apiKeyOneApi}` },
    }
  );
  const data: IResponse = response.data;
  console.log(data);
  return data.docs;
};
