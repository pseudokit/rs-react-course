import React, { useState, ChangeEvent } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {
    searchHandler: (term: string) => void;
    initialQuery: string;
}

const Header: React.FC<HeaderProps> = ({ searchHandler, initialQuery }) => {
    const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    const onClickHandler = () => {
        searchHandler(searchQuery);
    };

    return (
        <div className={styles.Header}>
            <>
                <input
                    type="text"
                    className={styles.Search}
                    onChange={onChangeHandler}
                    value={searchQuery}
                    placeholder="Поиск..."
                />
                <button className={styles.SearchBtn} onClick={onClickHandler}>
                    Поиск . . .
                </button>
            </>
        </div>
    );
};

export default Header;
