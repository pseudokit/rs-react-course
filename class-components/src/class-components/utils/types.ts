export interface ICard {
  id: number;
  name: string;
  year: number;
  url?: string;
}

export interface IPersonCard {
  id: string;
  firstName: string;
  surName: string;
  birthDay: string;
  fileUrl: string;
  country: string;
  sex: string;
}

export interface ICharacter {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
}
export interface IResponse {
  docs: Array<ICharacter>;
  offset: string;
  page: string;
  pages: string;
  total: string;
}

export interface AppCharacterState {
  characters: Array<ICharacter>;
}

export interface UpdateCharactersFunc {
  (input: Array<number>): void;
}
