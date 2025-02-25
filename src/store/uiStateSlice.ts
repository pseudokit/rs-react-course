import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
    query: string;
}

const initialState: UiState = {
    query: "",
};

const uiStateSlice = createSlice({
    name: "uiStateSlice",
    initialState: initialState,
    reducers: {
        setQueryValue(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
    },
});

export const { setQueryValue } = uiStateSlice.actions;

export default uiStateSlice.reducer;
