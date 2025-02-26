import React, { useEffect, useState } from "react";

import Results from "../components/Results/Results";

import { LIMIT_PER_PAGE } from "../const/const";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store/store.ts"; //AppDispatch
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination/Pagination.tsx";
import Header from "../components/Header/Header.tsx";
import { useGetCharactersQuery } from "../store/charactersApi.ts";
import { setCurrentCharacters } from "../store/currentCharactersSlice.ts";
import { setPageValue } from "../store/uiStateSlice.ts";
import SelectedChareacters from "../components/SelectedCharacters/SelectedCharacters.tsx";

export const HomePage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [offset, setOffset] = useState(0);

    //const counter = useSelector((state: RootState) => state.selectedItems.value);
    const dispatch = useDispatch();
    const queryState = useSelector((state: RootState) => state.uiState.query);
    const pageState = useSelector((state: RootState) => state.uiState.page);

    const {
        data = { characters: [], pages: "0", page: "0", total: "0" },
        isFetching,
        isError,
    } = useGetCharactersQuery({ searchQuery: queryState, page: pageState });

    useEffect(() => {
        if (data) {
            dispatch(setCurrentCharacters(data.characters));
            setTotalPages(Math.ceil(data.characters.length / LIMIT_PER_PAGE));
        }
    }, [data, dispatch]);

    const navigate = useNavigate();
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
        dispatch(setPageValue(currentPage));
    };

    return (
        <>
            <Header />
            <Pagination
                currentPage={parseInt(data.page)}
                total={parseInt(data.pages)}
                onChangePage={onChangePageHandler}
            />
            <SelectedChareacters />
            <Results isLoading={isFetching} isError={isError} />
        </>
    );
};
