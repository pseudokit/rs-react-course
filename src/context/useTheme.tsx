import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextProps } from "../utils/types";

const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("we got error");
    }
    return context;
};

export { useTheme };
