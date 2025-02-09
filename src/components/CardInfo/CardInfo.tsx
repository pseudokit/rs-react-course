import React, { MouseEvent } from "react";
import styles from "./CardInfo.module.scss";
import { ICharacter } from "../../utils/types";

interface CardInfoProps {
    character: ICharacter;
    onCloseHandler: () => void;
}

const CardInfo: React.FC<CardInfoProps> = ({ character, onCloseHandler }) => {
    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        console.log(e);
        onCloseHandler();
    };
    return (
        <div className={styles.cardInfo} data-testid="testid-cardInfo">
            <h3 data-testid="testid-cardInfoTitle" className={styles.cardTitle}>
                Инфа по карточке id = {character._id}
            </h3>
            <span>Name: {character.name}</span>
            <div
                className={styles.closeBtn}
                onClick={onClickHandler}
                data-testid="testid-cardInfoBtn"
            >
                Close
            </div>
        </div>
    );
};

export default CardInfo;
