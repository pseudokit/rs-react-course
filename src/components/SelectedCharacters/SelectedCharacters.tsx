import React from "react";
import styles from "./SelectedCharacters.module.scss";

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../store/selectItemsSlice";
import { createCharacterCSV } from "./createCSV";

const SelectedCharacters: React.FC = () => {
    const dispatch = useDispatch();
    const selectedItemsList = useSelector((state: RootState) => state.selectedItems.list);

    if (selectedItemsList.length === 0) {
        return "";
    }
    const unselectHandler = () => {
        dispatch(clearItems());
    };

    const downloadHandler = () => {
        const csvContent = createCharacterCSV(selectedItemsList);

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        return url;
    };
    const dispatchAfterDownload = () => {
        dispatch(clearItems());
    };
    return (
        <div className={styles.container}>
            {" "}
            {selectedItemsList.length} item&apos;s selected{" "}
            <div className={styles.btnContainer}>
                <button className={styles.btnUnselect} onClick={() => unselectHandler()}>
                    Unselect all
                </button>

                <a href={downloadHandler()} download={`${selectedItemsList.length}_characters.csv`}>
                    <button
                        className={styles.btnDownload}
                        data-testid="testid-download"
                        onClick={() => dispatchAfterDownload()}
                    >
                        Download
                    </button>
                </a>
            </div>
        </div>
    );
};

export default SelectedCharacters;
