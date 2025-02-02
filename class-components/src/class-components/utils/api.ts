import axios from 'axios';
import { ICharacter, IResponse } from './types';

export const baseUrlOneApi = `https://the-one-api.dev/v2/`;

//export const apiKeyOneApi = 'iiTstM0mt75U53pczkha';
//b6e1nvsD0GNASWX-IMmV
//IEUYNLIvFe88o3JqtT0R
export const apiKeyOneApi = 'b6e1nvsD0GNASWX-IMmV';
/*interface IData {
  docs: Array<ICharacter>;
  limit: string;
  offset: string;
  page: string;
  pages: string;
  total: string;
}*/

export const getWithAxiosCharacters = async (
  search: string
): Promise<ICharacter[]> => {
  const response = await axios.get(
    //`${baseUrlOneApi}character?name=/${search}/i&limit=${10}&page=2`,
    `${baseUrlOneApi}character?name=/${search}/i&limit=${20}&page=1`,
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

/*characters: [
  {
    birth: 'YT during the ,Noontide of Valinor',
    death: 'FA 455',
    gender: 'Male',
    hair: 'Golden',
    height: null,
    name: 'Aegnor',
    race: 'Elf',
    realm: null,
    spouse: 'Loved ,Andreth but remained unmarried',
    wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
    _id: '5cd99d4bde30eff6ebccfbc1',
  },
  {
    birth: 'YT during the ,Noontide of Valinor',
    death: 'FA 455',
    gender: 'Male',
    hair: 'Golden',
    height: null,
    name: 'Alex',
    race: 'Elf',
    realm: null,
    spouse: 'Loved ,Andreth but remained unmarried',
    wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
    _id: '5cd99d4bde30eff6ebccfbc1',
  },
],*/
