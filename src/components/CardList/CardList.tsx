import React, { useState } from "react";
import "./CardList.module.scss";
import { ICharacter } from "../../utils/types";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";
import { LIMIT_PER_PAGE } from "../../const/const";
import CardInfo from "../CardInfo/CardInfo";
import { getCharacterById } from "../../utils/api";
import { DEFAULT_CHARACTER } from "../../utils/localData";

interface CardListProps {
    cardList: Array<ICharacter>;
    offset: number;
}

const CardList: React.FC<CardListProps> = ({ cardList, offset }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [currentCharacter, setCurrentCharacter] = useState(DEFAULT_CHARACTER);
    const handlerClick = (id: string) => {
        setIsOpened(true);
        getCharacterApi(id);
    };
    const getCharacterApi = async (id: string) => {
        const data = await getCharacterById(id);
        console.log(data);
        if (data) {
            setCurrentCharacter(data[0]);
        }
    };

    const onCloseHandler = () => {
        setIsOpened(false);
    };

    return (
        <div className={styles.cardList}>
            <div className={styles.cardList__container}>
                {cardList.slice(offset, offset + LIMIT_PER_PAGE).map((component, index) => (
                    <Card card={component} key={index} handlerClickCard={handlerClick} />
                ))}
            </div>
            {isOpened && <CardInfo character={currentCharacter} onCloseHandler={onCloseHandler} />}
        </div>
    );
};

export default CardList;
