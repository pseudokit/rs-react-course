import React from "react";
import { useGetCharacterByIdQuery } from "../../store/charactersApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./CardDetail.module.scss";

import { setIsOpenedValue } from "../../store/uiStateSlice";

const CardDetail: React.FC = () => {
    const dispatch = useDispatch();
    const currentDetailId = useSelector((state: RootState) => state.uiState.currentDetailId);
    const isOpened = useSelector((state: RootState) => state.uiState.isOpened);
    const { data, isFetching } = useGetCharacterByIdQuery(currentDetailId);
    if (!data) {
        return;
    }

    const onCloseHandler = () => {
        dispatch(setIsOpenedValue(false));
    };

    return (
        <>
            {isOpened ? (
                isFetching ? (
                    <h3>Loading...</h3>
                ) : (
                    <div className={styles.cardInfo} data-testid="testid-cardInfo">
                        <h3 data-testid="testid-cardInfoTitle" className={styles.cardTitle}>
                            Инфа по карточке id = {data._id}
                        </h3>
                        <span>Name: {data.name}</span>
                        <div
                            className={styles.closeBtn}
                            onClick={onCloseHandler}
                            data-testid="testid-cardInfoBtn"
                        >
                            Close
                        </div>
                    </div>
                )
            ) : (
                ""
            )}
        </>
    );
};

export default CardDetail;

