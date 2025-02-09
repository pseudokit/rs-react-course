import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";

describe("Header Component", () => {
    const searchFunc = vi.fn();
    const searchQuery = "Aragorn";
    it("render Header component", () => {
        render(<Header searchHandler={searchFunc} />);
        const input = screen.getByPlaceholderText("Поиск...");
        const btn = screen.getByTestId("testid-searchBtn");
        fireEvent.change(input, { target: { value: searchQuery } });
        fireEvent.click(btn);
        expect(searchFunc).toHaveBeenCalledWith(searchQuery);
    });
});
