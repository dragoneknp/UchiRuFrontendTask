import { CatInfo } from "../Types/types";

export const saveOnClient = (cat: CatInfo) => {
    if (!localStorage.getItem("favouriteCats")) {
        const cats = [];
        cats.push(cat);
        localStorage.setItem("favouriteCats", JSON.stringify(cats));
    } else {
        const cats: CatInfo[] = JSON.parse(
            localStorage.getItem("favouriteCats") as any
        );
        cats.push(cat);
        localStorage.setItem("favouriteCats", JSON.stringify(cats));
    }
};

export const deleteFromClient = (cat: CatInfo) => {
    if (localStorage.getItem("favouriteCats")) {
        const cats: CatInfo[] = JSON.parse(
            localStorage.getItem("favouriteCats") as any
        );
        localStorage.setItem(
            "favouriteCats",
            JSON.stringify(cats.filter((c) => c.id !== cat.id))
        );
    }
};

export const getFavouriteCats = () => {
    return JSON.parse(localStorage.getItem("favouriteCats") as any);
};
