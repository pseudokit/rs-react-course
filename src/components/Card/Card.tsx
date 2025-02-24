import React, { MouseEvent } from "react";
import styles from "./Card.module.scss";
import { ICharacter } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectItem } from "../../store/storeSlice";

interface CardProps {
    card: ICharacter;
    onClickCardHandler: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ card, onClickCardHandler }) => {
    const dispatch = useDispatch();
    const isChecked = useSelector((state: RootState) => state.data.list.includes(card));

    const checkboxClickHandler = (event: React.MouseEvent<HTMLInputElement>): void => {
        event.stopPropagation();
    };
    const checkboxChangeHandler = (): void => {
        dispatch(selectItem(card));
    };

    const onCliCkHandler = (event: MouseEvent<HTMLDivElement>) => {
        const card = event.currentTarget;
        const id = card.dataset.id;
        console.log("Div id:", id);
        if (id) {
            onClickCardHandler(id);
        }
    };
    return (
        <div
            className={styles.card}
            data-id={card._id}
            data-testid="testid-card"
            onClick={onCliCkHandler}
        >
            <div className={styles.cardCheckBoxContainer}>
                <input
                    className={styles.cardCustomCheckbox}
                    type="checkbox"
                    onClick={checkboxClickHandler}
                    onChange={checkboxChangeHandler}
                    checked={isChecked}
                />
            </div>
            <div className={styles.cardInfoContainer}>
                <h2>Name: {card.name} </h2>
                <div>Birth: {card.birth}</div>
            </div>
        </div>
    );
};

export default Card;
