import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
    query: string;
    page: number;
    isOpened: boolean;
    currentDetailId: string | null;
}

const initialState: UiState = {
    query: "",
    page: 1,
    isOpened: false,
    currentDetailId: null,
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
        setIsOpenedValue(state, action: PayloadAction<boolean>) {
            state.isOpened = action.payload;
        },
        setDetailIdValue(state, action: PayloadAction<string>) {
            state.currentDetailId = action.payload;
        },
    },
});

export const { setQueryValue, setPageValue, setIsOpenedValue, setDetailIdValue } =
    uiStateSlice.actions;

export default uiStateSlice.reducer;
