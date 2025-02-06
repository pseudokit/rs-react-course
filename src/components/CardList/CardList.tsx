import React from "react";
import "./CardList.module.scss";
import { ICharacter } from "../utils/types";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";

interface CardListProps {
    cardList: Array<ICharacter>;
}

const CardList: React.FC<CardListProps> = ({ cardList }) => {
    return (
        <div className={styles.cardList}>
            {cardList.map((component, index) => (
                <Card card={component} key={index} />
            ))}
        </div>
    );
};

export default CardList;
