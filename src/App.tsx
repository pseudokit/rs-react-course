import React, { useEffect, useState } from "react";
import "./App.css";

import Results from "./components/Results/Results";

import { ICharacter } from "./utils/types";
import { getWithAxiosCharacters } from "./utils/api";
import Pagination from "./components/Pagination/Pagination";
import Header from "./components/Header/Header";
import { LIMIT_PER_PAGE } from "./const/const";

const App: React.FC = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [offset, setOffset] = useState(0);
    const navigate = useNavigate();

    const apiCallQuery = async (query: string) => {
        setIsLoading(true);
        try {
            const dataJson = await getWithAxiosCharacters(query);
            if (!dataJson.length) {
                setIsError(true);
            } else {
                setIsError(false);
                setTotalPages(Math.ceil(dataJson.length / LIMIT_PER_PAGE));
            }
            setCharacters(dataJson);
        } catch {
            setIsError(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        setCurrentPage(1);
        navigate(`/?page=1`);
    }, [navigate, totalPages]);

    useEffect(() => {
        setOffset(LIMIT_PER_PAGE * (currentPage - 1));
        navigate(`/?page=${currentPage}`);
    }, [currentPage, navigate, offset]);

    const onChangePageHandler = (currentPage: number) => {
        setCurrentPage(currentPage);
    };

    return (
        <>
            <Pagination
                currentPage={currentPage}
                total={totalPages}
                onChangePage={onChangePageHandler}
            />
            <Header searchHandler={apiCallQuery} />
            <Results
                characters={characters}
                offset={offset}
                isLoading={isLoading}
                isError={isError}
            />
        </>
    );
};

export default App;
