import React, { useEffect } from "react";

import Results from "../components/Results/Results";

//import { useNavigate } from "react-router-dom";

import { RootState } from "../store/store.ts"; //AppDispatch
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination/Pagination.tsx";
import Header from "../components/Header/Header.tsx";
import { useGetCharactersQuery } from "../store/charactersApi.ts";
import { setCurrentCharacters } from "../store/currentCharactersSlice.ts";
import { setPageValue } from "../store/uiStateSlice.ts";
import SelectedChareacters from "../components/SelectedCharacters/SelectedCharacters.tsx";
import { useTheme } from "../context/useTheme.tsx";

export const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const queryState = useSelector((state: RootState) => state.uiState.query);
    const pageState = useSelector((state: RootState) => state.uiState.page);

    const {
        data = { characters: [], pages: "0", page: "0", total: "0" },
        isFetching,
        isError,
    } = useGetCharactersQuery({ searchQuery: queryState, page: pageState });
    const { theme } = useTheme();
    useEffect(() => {
        if (data) {
            dispatch(setCurrentCharacters(data.characters));
        }
    }, [data, dispatch]);

    const onChangePageHandler = (currentPage: number) => {
        dispatch(setPageValue(currentPage));
    };

    return (
        <div className={theme === "light" ? "light" : "dark"}>
            <Header />
            <Pagination
                currentPage={parseInt(data.page)}
                total={parseInt(data.pages)}
                onChangePage={onChangePageHandler}
            />
            <SelectedChareacters />
            <Results isLoading={isFetching} isError={isError} />
        </div>
    );
};
