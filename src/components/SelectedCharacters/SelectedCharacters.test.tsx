import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import selectItemsReducer, { clearItems } from "../../store/selectItemsSlice";
import { charactersApi } from "../../store/charactersApi";
import uiStateReducer from "../../store/uiStateSlice";
import currentCharactersReducer from "../../store/currentCharactersSlice";
import { mockCharacterDataList } from "../../test/mockData";
import SelectedCharacters from "./SelectedCharacters";

const mockStore = configureStore({
    reducer: {
        uiState: uiStateReducer,
        selectedItems: selectItemsReducer,
        currentCharacters: currentCharactersReducer,
        [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
    preloadedState: {
        selectedItems: {
            list: mockCharacterDataList,
        },
    },
});

describe("SelectedCharacters component", () => {
    it("render correct", () => {
        render(
            <Provider store={mockStore}>
                <SelectedCharacters />
            </Provider>,
        );
        const downloadButton = screen.getByTestId("testid-download");
        expect(downloadButton).toBeInTheDocument();
        expect(screen.getByText("2 item's selected")).toBeInTheDocument();
        expect(screen.getByText(/Unselect all/i)).toBeInTheDocument();
    });

    it("dispatches clearItems when unselected", () => {
        const dispatchSpy = vi.spyOn(mockStore, "dispatch");
        render(
            <Provider store={mockStore}>
                <SelectedCharacters />
            </Provider>,
        );
        fireEvent.click(screen.getByText(/Unselect all/i));
        expect(dispatchSpy).toHaveBeenCalledWith(clearItems());
    });
});
