import React, { useEffect, useState } from "react";

import Results from "../components/Results/Results";

import { ICharacter } from "../utils/types";
import { getWithAxiosCharacters } from "../utils/api";
import { LIMIT_PER_PAGE } from "../const/const";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store/store.ts"; //AppDispatch
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination/Pagination.tsx";
import Header from "../components/Header/Header.tsx";
import { useGetCharactersQuery } from "../store/charactersApi.ts";
import { setCurrentCharacters } from "../store/currentCharactersSlice.ts";

export const HomePage: React.FC = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [offset, setOffset] = useState(0);

    //const counter = useSelector((state: RootState) => state.selectedItems.value);
    const dispatch = useDispatch();
    const queryState = useSelector((state: RootState) => state.uiState.query);

    const { data, isFetching, isLoading, isError } = useGetCharactersQuery(queryState);

    useEffect(() => {
        if (data) {
            dispatch(setCurrentCharacters(data));
        }
    }, [data, dispatch]);

    const navigate = useNavigate();

    /*const apiCallQuery = async (query: string) => {
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
    };*/

    useEffect(() => {
        setCurrentPage(1);
        //navigate(`/?page=1`);
    }, [navigate, totalPages]);

    useEffect(() => {
        setOffset(LIMIT_PER_PAGE * (currentPage - 1));
        //navigate(`/?page=${currentPage}`);
    }, [currentPage, navigate, offset]);

    const onChangePageHandler = (currentPage: number) => {
        setCurrentPage(currentPage);
    };

    return (
        <>
            <h1 style={{ color: `black` }}>{data?.length} </h1>
            <Pagination
                currentPage={currentPage}
                total={totalPages}
                onChangePage={onChangePageHandler}
            />
            <Header />
            <Results offset={offset} isLoading={isFetching} isError={isError} />
        </>
    );
};
