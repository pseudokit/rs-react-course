import React from "react";
import "./CardList.module.scss";
import { ICharacter } from "../utils/types";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";

interface CardListProps {
    cardList: Array<ICharacter>;
}

class CardList extends React.Component<CardListProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.CardList}>
                {this.props.cardList.map((component, index) => (
                    <Card card={component} key={index} />
                ))}
            </div>
        );
    }
}

export default CardList;
