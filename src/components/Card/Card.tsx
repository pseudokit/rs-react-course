import * as React from "react";
import styles from "./Card.module.scss";
import { ICharacter } from "../utils/types";

interface CardProps {
    card: ICharacter;
}

class Card extends React.Component<CardProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.Card}>
                <div>Name: {this.props.card.name} </div>
                <div>Birth: {this.props.card.birth}</div>
            </div>
        );
    }
}

export default Card;
