import React, { MouseEvent } from "react";
import styles from "./Card.module.scss";
import { ICharacter } from "../../utils/types";

interface CardProps {
    card: ICharacter;
    handlerClickCard: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ card, handlerClickCard }) => {
    const onCliCkHandler = (e: MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const id = card.dataset.id;
        console.log("Div id:", id);
        if (id) {
            handlerClickCard(id);
        }
    };
    return (
        <div
            className={styles.card}
            onClick={onCliCkHandler}
            data-id={card._id}
            data-testid="testid-card"
        >
            <h2>Name: {card.name} </h2>
            <div>Birth: {card.birth}</div>
        </div>
    );
};

export default Card;
