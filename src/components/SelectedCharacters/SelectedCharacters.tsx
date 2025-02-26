import React from "react";
import styles from "./SelectedCharacters.module.scss";

import { RootState } from "../../store/store"; //AppDispat
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../../store/selectItemsSlice";
import { ICharacter } from "../../utils/types";

const SelectedChareacters: React.FC = () => {
    const dispatch = useDispatch();
    const selectedItems = useSelector((state: RootState) => state.selectedItems);
    if (selectedItems.list.length === 0) {
        return "";
    }
    const unselectHandler = () => {
        dispatch(clearItems());
    };
    const downloadHandler = () => {
        const keys = Object.keys(selectedItems.list[0]) as (keyof ICharacter)[];
        const csvRows = [
            keys.join(","),
            ...selectedItems.list.map((item: ICharacter) =>
                keys.map((key) => item[key]).join(", "),
            ),
        ];
        const csv = csvRows.join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${selectedItems.list.length}_characters.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        dispatch(clearItems());
    };

    return (
        <div className={styles.container}>
            {" "}
            {selectedItems.list.length} item&apos;s selected{" "}
            <div className={styles.btnContainer}>
                <button className={styles.btnUnselect} onClick={() => unselectHandler()}>
                    Unselect all
                </button>
                <button className={styles.btnDownload} onClick={() => downloadHandler()}>
                    Download
                </button>
            </div>
        </div>
    );
};

export default SelectedChareacters;
