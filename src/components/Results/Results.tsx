import * as React from "react";
import styles from "./Results.module.scss";
import CardList from "../CardList/CardList";
import Loader from "../Loader/Loader";

interface ResultsProps {
    isLoading: boolean;
    isError: boolean;
}

const Results: React.FC<ResultsProps> = ({ isLoading, isError }) => {
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
            <CardList />
        </div>
    );
};

export default Results;
