import React, { useState } from "react";
import "./CardList.module.scss";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";
import { LIMIT_PER_PAGE } from "../../const/const";
import CardInfo from "../CardInfo/CardInfo";
import { getCharacterById } from "../../utils/api";
import { mockCharacterData } from "../../test/mockData";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface CardListProps {
    offset: number;
}

const CardList: React.FC<CardListProps> = ({ offset }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [currentCharacter, setCurrentCharacter] = useState(mockCharacterData);
    const [isLoading, setIsLoading] = useState(true);
    const handlerClick = (id: string) => {
        setIsOpened(true);
        getCharacterApi(id);
    };

    const currentCharactersState = useSelector(
        (state: RootState) => state.currentCharacters.currentCharacters,
    );

    const getCharacterApi = async (id: string) => {
        setIsLoading(true);
        const data = await getCharacterById(id);
        if (data) {
            setCurrentCharacter(data[0]);
        }
        setIsLoading(false);
    };

    const onCloseHandler = () => {
        setIsOpened(false);
    };

    return (
        <div className={styles.cardList} data-testid="testid-cardList">
            <div className={styles.cardList__container}>
                {currentCharactersState
                    .slice(offset, offset + LIMIT_PER_PAGE)
                    .map((component, index) => (
                        <Card card={component} key={index} onClickCardHandler={handlerClick} />
                    ))}
            </div>
            {isOpened ? (
                isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <CardInfo character={currentCharacter} onCloseHandler={onCloseHandler} />
                )
            ) : (
                ""
            )}
        </div>
    );
};

export default CardList;
