import React from "react";
import "./CardList.module.scss";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardDetail from "../CardDetail/CardDetail";

const CardList: React.FC = () => {
    const currentCharactersState = useSelector(
        (state: RootState) => state.currentCharacters.currentCharacters,
    );
    if (currentCharactersState.length === 0 || !currentCharactersState) {
        return (
            <div className={styles.results}>
                <div className={styles.errorContainer}>
                    <h1>No data</h1>
                    <p>Some went wrong...</p>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.cardList} data-testid="testid-cardList">
            <div className={styles.cardList__container}>
                {currentCharactersState.map((component, index) => (
                    <Card card={component} key={index} />
                ))}
            </div>
            <CardDetail />
        </div>
    );
};

export default CardList;
