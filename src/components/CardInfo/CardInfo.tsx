import React, { MouseEvent } from "react";
import styles from "./CardInfo.module.scss";
import { ICharacter } from "../../utils/types";
import { useDispatch } from "react-redux";
import { setIsOpenedValue } from "../../store/uiStateSlice";
//import { useGetCharacterByIdQuery } from "../../store/charactersApi";

interface CardInfoProps {
    character: ICharacter;
    onCloseHandler: () => void;
}

const CardInfo: React.FC<CardInfoProps> = ({ character, onCloseHandler }) => {
    /*const {
        data: characterData,
        isSuccess,
        isLoading,
        isFetching,
        isError,
    } = useGetCharacterByIdQuery(Number(id));*/
    const dispatch = useDispatch();

    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        console.log(e);
        onCloseHandler();
        dispatch(setIsOpenedValue(false));
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
