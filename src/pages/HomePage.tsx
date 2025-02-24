import React, { useEffect, useState } from "react";

import Results from "../components/Results/Results";

import { ICharacter } from "../utils/types";
import { getWithAxiosCharacters } from "../utils/api";
import { LIMIT_PER_PAGE } from "../const/const";
import { useNavigate } from "react-router-dom";

import { RootState, AppDispatch } from "../store/store.ts";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination/Pagination.tsx";
import Header from "../components/Header/Header.tsx";
import { add } from "../store/storeSlice.ts";
import { mockCharacterData } from "../test/mockData.ts";

export const HomePage: React.FC = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [offset, setOffset] = useState(0);

    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.data);

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
            <div>
                <h1 style={{ color: `black` }}>{data.value}</h1>
                <button onClick={() => dispatch(add(mockCharacterData))}>Add reducer!</button>
            </div>
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
