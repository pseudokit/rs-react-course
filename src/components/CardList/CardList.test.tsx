import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { mockCharacterDataList } from "../../test/mockData";
import CardList from "./CardList";

describe("CardList component", () => {
    it(" render mock characters", () => {
        render(<CardList cardList={mockCharacterDataList} offset={0} />);
        expect(screen.getAllByTestId("testid-card")).toHaveLength(mockCharacterDataList.length);
    });
});
