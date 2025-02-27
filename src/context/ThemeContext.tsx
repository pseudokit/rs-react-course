import React, { createContext, useState, ReactNode } from "react";
import { Theme, ThemeContextProps } from "../utils/types";

const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {},
});

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((prevTheme: Theme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
