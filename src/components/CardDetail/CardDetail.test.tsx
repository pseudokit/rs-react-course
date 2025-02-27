import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CardDetail from "./CardDetail";
import uiStateReducer from "../../store/uiStateSlice";
import currentCharactersReducer from "../../store/currentCharactersSlice";
import { charactersApi } from "../../store/charactersApi";

describe("CardDetail Component", () => {
    it("empty current Character", () => {
        const mockStoreWithNoData = configureStore({
            reducer: {
                uiState: uiStateReducer,
                currentCharacters: currentCharactersReducer,
                [charactersApi.reducerPath]: charactersApi.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(charactersApi.middleware),
            preloadedState: {
                uiState: { currentDetailId: "1", isOpened: true, query: "", page: 1 },
                currentCharacters: { currentCharacters: [] },
            },
        });

        render(
            <Provider store={mockStoreWithNoData}>
                <CardDetail />
            </Provider>,
        );

        expect(screen.queryByTestId("testid-cardInfo")).not.toBeInTheDocument();
    });
});
