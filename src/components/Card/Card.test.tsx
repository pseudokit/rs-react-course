import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Card from "./Card";
import { mockCharacterData } from "../../test/mockData";

describe("card component", () => {
    it("card renders correct", () => {
        const mockOnClick = vi.fn();
        render(<Card card={mockCharacterData} handlerClickCard={mockOnClick} />);
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockCharacterData.name);
    });

    it("card is clicked", () => {
        const mockOnClick = vi.fn();
        render(<Card card={mockCharacterData} handlerClickCard={mockOnClick} />);

        const card = screen.getByTestId("testid-card");
        fireEvent.click(card);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
