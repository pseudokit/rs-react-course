import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CardInfo from "./CardInfo";
import { mockCharacterData } from "../../test/mockData";

describe("cardinfo component", () => {
    it("cardinfo renders correct", () => {
        const mockOnClick = vi.fn();
        render(<CardInfo character={mockCharacterData} onCloseHandler={mockOnClick} />);
        const cardInfo = screen.getByTestId("testid-cardInfo");
        expect(cardInfo).toHaveTextContent(mockCharacterData.name);
        expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(mockCharacterData._id);
    });

    it("cardInfo is clicked", () => {
        const mockOnClick = vi.fn();
        render(<CardInfo character={mockCharacterData} onCloseHandler={mockOnClick} />);

        const cardInfoBtn = screen.getByTestId("testid-cardInfoBtn");
        fireEvent.click(cardInfoBtn);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
