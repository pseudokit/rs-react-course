import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Pagination from "./Pagination";

describe("Pagination component", () => {
    it("renders correct", () => {
        render(<Pagination currentPage={1} total={5} onChangePage={vi.fn()} />);
        expect(screen.getByText(/Previous/i)).toBeInTheDocument();
        expect(screen.getByText(/Next/i)).toBeInTheDocument();
    });

    it("onChangePage calls corect", () => {
        const onChangePageMock = vi.fn();
        render(<Pagination currentPage={2} total={5} onChangePage={onChangePageMock} />);

        const nextButton = screen.getByText(/Next/i);
        fireEvent.click(nextButton);

        expect(onChangePageMock).toHaveBeenCalledWith(3);
    });

    it("disables Previous button", () => {
        render(<Pagination currentPage={1} total={5} onChangePage={vi.fn()} />);

        const prevButton = screen.getByText(/Previous/i);
        expect(prevButton).toBeDisabled();
    });

    it("disables Next button", () => {
        render(<Pagination currentPage={5} total={5} onChangePage={vi.fn()} />);

        const nextButton = screen.getByText(/Next/i);
        expect(nextButton).toBeDisabled();
    });
});
