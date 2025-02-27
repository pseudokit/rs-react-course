import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import CardList from "./CardList";
import { configureStore } from "@reduxjs/toolkit";
import selectItemsReducer from "../../store/selectItemsSlice";
import { charactersApi } from "../../store/charactersApi";
import uiStateReducer from "../../store/uiStateSlice";
import currentCharactersReducer from "../../store/currentCharactersSlice";
import { mockCharacterDataList } from "../../test/mockData";

const mockStore = configureStore({
    reducer: {
        uiState: uiStateReducer,
        selectedItems: selectItemsReducer,
        currentCharacters: currentCharactersReducer,
        [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
    preloadedState: {
        uiState: { currentDetailId: null, isOpened: false, query: "", page: 1 },
        selectedItems: { list: [], value: 0 },
        currentCharacters: { currentCharacters: mockCharacterDataList },
    },
});

describe("CardList component", () => {
    it("renders mock characters", () => {
        render(
            <Provider store={mockStore}>
                <CardList />
            </Provider>,
        );

        expect(screen.getAllByTestId("testid-card")).toHaveLength(mockCharacterDataList.length);
    });
    it("displays 'No data' message when currentCharactersState is empty", () => {
        const emptyStore = configureStore({
            reducer: {
                uiState: uiStateReducer,
                selectedItems: selectItemsReducer,
                currentCharacters: currentCharactersReducer,
                [charactersApi.reducerPath]: charactersApi.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(charactersApi.middleware),
            preloadedState: {
                uiState: { currentDetailId: null, isOpened: false, query: "", page: 1 },
                selectedItems: { list: [], value: 0 },
                currentCharacters: { currentCharacters: [] },
            },
        });

        render(
            <Provider store={emptyStore}>
                <CardList />
            </Provider>,
        );

        expect(screen.getByText("No data")).toBeInTheDocument();
        expect(screen.getByText("Some went wrong...")).toBeInTheDocument();
        expect(screen.queryByTestId("testid-cardList")).not.toBeInTheDocument();
    });
});
