import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Results from "./Results";
import { mockCharacterDataList } from "../../test/mockData";

describe("Header Component", () => {
    it("render results component", () => {
        render(
            <Results
                characters={mockCharacterDataList}
                isLoading={false}
                isError={false}
                offset={0}
            />,
        );
        const results = screen.getByTestId("testid-results");
        expect(screen.getAllByTestId("testid-card")).toHaveLength(mockCharacterDataList.length);
        expect(results).toBeInTheDocument();
    });
    it("displays error message", () => {
        const errorMessage = "Error page";
        render(<Results characters={[]} isLoading={false} isError={true} offset={0} />);
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
    it("displays loader", () => {
        render(<Results characters={[]} isLoading={true} isError={false} offset={0} />);
        expect(screen.getByTestId("testid-loader")).toBeInTheDocument();
    });
});
