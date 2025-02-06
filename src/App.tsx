import React, { useState } from "react";
import "./App.css";

import Results from "./components/Results/Results";

import { ICharacter } from "./components/utils/types";
import HeaderFunc from "./components/Header/Header";
import { getWithAxiosCharacters } from "./components/utils/api";

const App: React.FC = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const apiCallQuery = async (query: string) => {
        setIsLoading(true);
        try {
            const dataJson = await getWithAxiosCharacters(query);
            if (!dataJson.length) {
                setIsError(true);
            } else {
                setIsError(false);
            }
            setIsLoading(true);
            setCharacters(dataJson);
        } catch {
            setIsError(true);
        }
        setIsLoading(false);
    };

    return (
        <>
            <HeaderFunc searchHandler={apiCallQuery} initialQuery={"a"} />
            <Results characters={characters} isLoading={isLoading} isError={isError} />
        </>
    );
};

export default App;
