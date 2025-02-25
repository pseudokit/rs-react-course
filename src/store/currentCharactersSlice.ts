import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../utils/types";

interface currentState {
    currentCharacters: ICharacter[];
}

const initialState: currentState = {
    currentCharacters: [],
};

const currentCardsSlice = createSlice({
    name: "currentCharacters",
    initialState: initialState,
    reducers: {
        setCurrentCharacters(state, action: PayloadAction<ICharacter[]>) {
            state.currentCharacters = action.payload;
        },
    },
});

export const { setCurrentCharacters } = currentCardsSlice.actions;

export default currentCardsSlice.reducer;
