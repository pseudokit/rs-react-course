import { configureStore } from "@reduxjs/toolkit";
import selectItemsReducer from "./selectItemsSlice";
import { charactersApi } from "../store/charactersApi";
import uiStateReducer from "../store/uiStateSlice";
import currentCharactersReducer from "../store/currentCharactersSlice";

export const store = configureStore({
    reducer: {
        uiState: uiStateReducer,
        selectedItems: selectItemsReducer,
        currentCharacters: currentCharactersReducer,
        [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
