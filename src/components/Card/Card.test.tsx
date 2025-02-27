import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Card from "./Card";
import { mockCharacterData } from "../../test/mockData";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Card component", () => {
    it("renders the card correctly", () => {
        render(
            <Provider store={store}>
                <Card card={mockCharacterData} />
            </Provider>,
        );
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockCharacterData.name);
        expect(screen.getByText(/Name:/i)).toHaveTextContent(mockCharacterData.name);
    });

    it("when card clicked calls dispatches - setDetailIdValue, setIsOpenedValue", () => {
        const mockDispatch = vi.fn();
        render(
            <Provider store={{ ...store, dispatch: mockDispatch }}>
                <Card card={mockCharacterData} />
            </Provider>,
        );

        const card = screen.getByTestId("testid-card");
        fireEvent.click(card);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: "uiStateSlice/setDetailIdValue",
            payload: mockCharacterData._id,
        });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "uiStateSlice/setIsOpenedValue",
            payload: true,
        });
    });

    it("when checkbox clicked calls selecItemDispatch", () => {
        const mockDispatch = vi.fn();
        render(
            <Provider store={{ ...store, dispatch: mockDispatch }}>
                <Card card={mockCharacterData} />
            </Provider>,
        );

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: "charactersSlice/selectItem",
            payload: mockCharacterData,
        });
    });
});
