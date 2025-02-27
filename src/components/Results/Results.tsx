import * as React from "react";
import styles from "./Results.module.scss";
import CardList from "../CardList/CardList";
import Loader from "../Loader/Loader";

interface ResultsProps {
    isLoading: boolean;
}

const Results: React.FC<ResultsProps> = ({ isLoading }) => {
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className={styles.results} data-testid="testid-results">
            <CardList />
        </div>
    );
};

export default Results;
