import React, { useState, ChangeEvent } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {
    searchHandler: (term: string) => void;
    //query: string;
}

const Header: React.FC<HeaderProps> = ({ searchHandler }) => {
    const [query, setQuery] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    const onClickHandler = () => {
        searchHandler(query);
    };

    return (
        <div className={styles.Header}>
            <>
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
            </>
        </div>
    );
};

export default Header;
