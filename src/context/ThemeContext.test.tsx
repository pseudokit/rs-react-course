import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

const TestComponent: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <span data-testid="testid-themeValue">{theme}</span>
            <button onClick={toggleTheme} data-testid="toggle-button">
                Toggle Theme
            </button>
        </div>
    );
};

describe("ThemeProvider component", () => {
    it("renders theme", () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>,
        );

        const themeValue = screen.getByTestId("testid-themeValue");
        expect(themeValue).toHaveTextContent("light");
    });
});
