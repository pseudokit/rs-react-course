import React, { useState, ChangeEvent } from "react";

import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { setPageValue, setQueryValue } from "../../store/uiStateSlice";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        console.log(query);
    };
    const onClickHandler = async () => {
        dispatch(setQueryValue(query));
        dispatch(setPageValue(1));
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
        </div>
    );
};

export default Header;
