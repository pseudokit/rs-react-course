import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loader from "./Loader";

describe("Header Component", () => {
    it("render Loader component", () => {
        render(<Loader />);
        const loader = screen.getByTestId("testid-loader");
        expect(loader).toBeInTheDocument();
    });
});
