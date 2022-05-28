import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatInfo } from "../../Types/types";

interface InitialStateProps {
    error: string;
    isLoading: boolean;
    cats: CatInfo[];
    page: number;
}

const initialState: InitialStateProps = {
    error: "",
    isLoading: false,
    cats: [],
    page: 1,
};

export const catsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        fetchCatsStarted(state) {
            state.isLoading = true;
            state.error = "";
        },
        fetchCatsSuccess(state, action: PayloadAction<CatInfo[]>) {
            state.isLoading = false;
            state.cats = action.payload;
        },
        fetchCatsFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addFavouriteCat(state, action: PayloadAction<string>) {
            state.cats.find((cat) => cat.id === action.payload)!.isFavourite =
                true;
        },
        deleteFavouriteCat(state, action: PayloadAction<string>) {
            state.cats.find((cat) => cat.id === action.payload)!.isFavourite =
                false;
        },
        incrementPage(state) {
            state.page += 1;
        },
        addNewCats(state, action: PayloadAction<CatInfo[]>) {
            state.isLoading = false;
            state.cats.push(...action.payload);
        },
    },
});

export const {
    fetchCatsFailed,
    fetchCatsStarted,
    fetchCatsSuccess,
    deleteFavouriteCat,
    addFavouriteCat,
    incrementPage,
    addNewCats,
} = catsSlice.actions;
export const catsReducer = catsSlice.reducer;
