import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import selectItemsReducer from "../store/selectItemsSlice";
import { charactersApi } from "../store/charactersApi";
import uiStateReducer from "../store/uiStateSlice";
import currentCharactersSlice from "../store/currentCharactersSlice";
import { HomePage } from "./HomePage";

const mockStore = configureStore({
    reducer: {
        uiState: uiStateReducer,
        selectedItems: selectItemsReducer,
        currentCharacters: currentCharactersSlice,
        [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

vi.mock("../context/useTheme", () => ({
    useTheme: () => ({ theme: "light" }),
}));

describe("HomePage component", () => {
    it("renders correctly", () => {
        render(
            <Provider store={mockStore}>
                <HomePage />
            </Provider>,
        );

        expect(screen.getByText(/Page 0 of 0/i)).toBeInTheDocument();

        expect(screen.getByTestId("testid-searchBtn")).toBeInTheDocument();
    });
});
