import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import Results from "./Results";
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
        currentCharacters: { currentCharacters: mockCharacterDataList },
    },
});

describe("Results Component", () => {
    it("Loader component renders correct", () => {
        render(
            <Provider store={mockStore}>
                <Results isLoading={true} isError={false} />
            </Provider>,
        );
        const loader = screen.getByTestId("testid-loader");
        expect(loader).toBeInTheDocument();
    });

    it("Error Page renders correct", () => {
        render(
            <Provider store={mockStore}>
                <Results isLoading={false} isError={true} />
            </Provider>,
        );
        const errorMessage = screen.getByText("Error page");
        expect(errorMessage).toBeInTheDocument();
    });

    it("CardList renders cards with correct length when no loading and no error", () => {
        render(
            <Provider store={mockStore}>
                <Results isLoading={false} isError={false} />
            </Provider>,
        );
        const results = screen.getByTestId("testid-results");
        expect(results).toBeInTheDocument();
        const cardsList = screen.getAllByTestId("testid-card");
        expect(cardsList).toHaveLength(mockCharacterDataList.length);
    });
});
