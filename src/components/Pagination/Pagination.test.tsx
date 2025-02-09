import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
    it("should disable the prevBtn when page = 1", () => {
        const currentPage = 1;
        const totalPages = 5;
        const mockFunc = vi.fn();

        render(<Pagination currentPage={currentPage} total={totalPages} onChangePage={mockFunc} />);

        const prevBtn = screen.getByText("Previous");
        expect(prevBtn).toBeDisabled();
    });
    it("should disable the nextBtn when page = 5 total 5", () => {
        const currentPage = 5;
        const totalPages = 5;
        const mockFunc = vi.fn();

        render(<Pagination currentPage={currentPage} total={totalPages} onChangePage={mockFunc} />);

        const nextBtn = screen.getByText("Next");
        expect(nextBtn).toBeDisabled();
    });
});
