import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Provider } from "react-redux";
import Header from "./Header";
import { configureStore } from "@reduxjs/toolkit";
import uiStateReducer from "../../store/uiStateSlice";

// Создадим макетный store с нужным состоянием
const mockStore = configureStore({
    reducer: {
        uiState: uiStateReducer,
    },
});

describe("Header Component", () => {
    const searchQuery = "Aragorn";

    it("Header component: dispatch setQueryValue and search field includes search value", () => {
        const mockDispatch = vi.fn();
        render(
            <Provider store={{ ...mockStore, dispatch: mockDispatch }}>
                <Header />
            </Provider>,
        );

        const input = screen.getByPlaceholderText("Поиск...");
        const btn = screen.getByTestId("testid-searchBtn");

        fireEvent.change(input, { target: { value: searchQuery } });
        fireEvent.click(btn);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: "uiStateSlice/setQueryValue",
            payload: searchQuery,
        });
    });

    it("switch theme btn works correct", () => {
        render(
            <Provider store={mockStore}>
                <Header />
            </Provider>,
        );

        const themeBtn = screen.getByTestId("testid-themeBtn");
        fireEvent.click(themeBtn);
    });
});
