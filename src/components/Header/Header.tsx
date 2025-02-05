import React, { useState, ChangeEvent } from "react";

import styles from "./Header.module.scss";
import { getWithAxiosCharacters } from "../utils/api";
import { ICharacter } from "../utils/types";

interface HeaderProps {
    setErrorPage: (isError: boolean) => void;
    updateFunc: (input: Array<ICharacter>) => void;
    updateLoading: () => void;
}

const Header: React.FC<HeaderProps> = ({ setErrorPage, updateFunc, updateLoading }) => {
    const [searchQuery, setSearchQuery] = useState<string>("a");
    const apiCall = async () => {
        try {
            await apiCallQuery(searchQuery);
        } catch {
            setErrorPage(true);
            updateLoading();
        }
    };
    const apiCallQuery = async (query: string) => {
        try {
            updateLoading();
            const dataJson = await getWithAxiosCharacters(query);
            if (!dataJson.length) {
                setErrorPage(true);
            } else {
                setErrorPage(false);
            }
            updateLoading();
            updateFunc(dataJson);
        } catch {
            setErrorPage(true);
            updateLoading();
        }
    };
    return (
        <div className={styles.Header}>
            <>
                {" "}
                <input
                    type="text"
                    className={styles.Search}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSearchQuery(e.target.value);
                    }}
                    value={searchQuery}
                    placeholder="Поиск..."
                />
                <button className={styles.SearchBtn} onClick={apiCall}>
                    {" "}
                    XX Поиск . . .
                </button>
            </>
        </div>
    );
};

export default Header;
