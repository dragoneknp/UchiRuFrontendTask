import axios from "axios";
import { apiKey } from "../../params";
import { CatInfo } from "../../Types/types";
import { getFavouriteCats } from "../../Utils/clientStorage";
import {
    addNewCats,
    fetchCatsFailed,
    fetchCatsStarted,
    fetchCatsSuccess,
    incrementPage,
} from "../Slices/catsSlice";
import { AppDispatch } from "../store";

export const getCats = () => async (dispatch: AppDispatch, getState: any) => {
    try {
        const page = getState().cat.page;

        dispatch(fetchCatsStarted());
        const response = await axios.get(
            `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}&order=Desc`,
            {
                headers: {
                    "x-api-key": apiKey,
                },
            }
        );
        const favouriteCats = getFavouriteCats();
        const data = response.data.map((item: CatInfo) => {
            if (favouriteCats?.find((cat: CatInfo) => cat.id === item.id)) {
                return {
                    id: item.id,
                    url: item.url,
                    isFavourite: true,
                };
            }
            return {
                id: item.id,
                url: item.url,
                isFavourite: false,
            };
        });
        if (page > 1) {
            dispatch(addNewCats(data));
        } else {
            dispatch(fetchCatsSuccess(data));
        }

        dispatch(incrementPage());
    } catch (e: any) {
        dispatch(fetchCatsFailed(e.message));
    }
};
