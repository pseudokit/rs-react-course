import * as React from "react";
import styles from "./Card.module.scss";
import { ICharacter } from "../utils/types";

interface CardProps {
    card: ICharacter;
}

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className={styles.card}>
            <div>Name: {card.name} </div>
            <div>Birth: {card.birth}</div>
        </div>
    );
};

export default Card;
