import * as React from "react";
import styles from "./Results.module.scss";
import { ICharacter } from "../../utils/types";
import CardList from "../CardList/CardList";
import Loader from "../Loader/Loader";

interface ResultsProps {
    characters: Array<ICharacter>;
    isLoading: boolean;
    isError: boolean;
    offset: number;
}

const Results: React.FC<ResultsProps> = ({ characters, isLoading, isError, offset }) => {
    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return (
            <div className={styles.results}>
                <div className={styles.errorContainer}>
                    <h1>Error page</h1>
                    <p>Some went wrong...</p>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.results} data-testid="testid-results">
            <CardList cardList={characters} offset={offset} />
        </div>
    );
};

export default Results;
