import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../utils/types";

interface CounterState {
    value: number;
    list: Array<ICharacter>;
}

const initialState: CounterState = {
    value: 0,
    list: [],
};

const dataSlice = createSlice({
    name: "charactersSlice",
    initialState,
    reducers: {
        selectItem: (state, action: PayloadAction<ICharacter>) => {
            state.value += 1;
            const item = action.payload;
            const isSelected = state.list.find((card: ICharacter) => card._id === item._id);
            console.log(isSelected);
            if (isSelected) {
                state.list = state.list.filter((character) => character._id !== item._id);
                return;
            }
            state.list.push(item);
        },
        clearItems: (state) => {
            state.list = [];
        },
    },
});

export const { selectItem, clearItems } = dataSlice.actions;

export default dataSlice.reducer;
