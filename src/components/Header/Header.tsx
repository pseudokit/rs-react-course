import React, { useState, ChangeEvent } from "react";

import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { setPageValue, setQueryValue } from "../../store/uiStateSlice";
import { useTheme } from "../../context/useTheme";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const { theme, toggleTheme } = useTheme();
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        console.log(query);
    };
    const onClickHandler = async () => {
        dispatch(setQueryValue(query));
        dispatch(setPageValue(1));
    };
    const onClickThemeProdiver = () => {
        toggleTheme();
        console.log(theme);
    };

    return (
        <div className={styles.Header}>
            <input
                type="text"
                className={styles.Search}
                onChange={onChangeHandler}
                value={query}
                placeholder="Поиск..."
            />
            <button
                className={styles.SearchBtn}
                onClick={onClickHandler}
                data-testid="testid-searchBtn"
            >
                Поиск . . .
            </button>
            <button
                className={styles.SearchBtn}
                onClick={onClickThemeProdiver}
                data-testid="testid-themeBtn"
            >
                {theme === "light" ? "light" : "dark"}
            </button>
        </div>
    );
};

export default Header;
