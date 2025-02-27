import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../utils/types";

interface CounterState {
    list: Array<ICharacter>;
}

const initialState: CounterState = {
    list: [],
};

const dataSlice = createSlice({
    name: "charactersSlice",
    initialState,
    reducers: {
        selectItem: (state, action: PayloadAction<ICharacter>) => {
            const item = action.payload;
            const isSelected = state.list.find((card: ICharacter) => card._id === item._id);
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
