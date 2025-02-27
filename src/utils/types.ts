export interface ICharacter {
    birth: string;
    death: string;
    gender: string;
    hair: string | null;
    height: string | null;
    name: string;
    race: string;
    realm: string | null;
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

export type Theme = "light" | "dark";

export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export interface AppCharacterState {
    characters: Array<ICharacter>;
}

export interface UpdateCharactersFunc {
    (input: Array<number>): void;
}
