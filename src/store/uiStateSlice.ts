import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
    query: string;
    page: number;
}

const initialState: UiState = {
    query: "",
    page: 1,
};

const uiStateSlice = createSlice({
    name: "uiStateSlice",
    initialState: initialState,
    reducers: {
        setQueryValue(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        setPageValue(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
});

export const { setQueryValue, setPageValue } = uiStateSlice.actions;

export default uiStateSlice.reducer;
