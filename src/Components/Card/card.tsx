import React, { forwardRef, memo } from "react";
import { useAppDispatch } from "../../Hooks/useRedux";
import {
    addFavouriteCat,
    deleteFavouriteCat,
} from "../../Store/Slices/catsSlice";
import { deleteFromClient, saveOnClient } from "../../Utils/clientStorage";
import "./card.scss";

interface CardProps {
    url: string;
    id: string;
    isFavourite: boolean;
    reload?: () => void;
}

const Card = forwardRef((props: CardProps, ref) => {
    const { url, id, isFavourite } = props;
    const dispatch = useAppDispatch();
    const handleFavouriteClick = () => {
        if (isFavourite) {
            dispatch(deleteFavouriteCat(id));
            deleteFromClient({ url: url, id: id, isFavourite: false });
            if (props.reload) {
                props.reload();
            }
        } else {
            dispatch(addFavouriteCat(id));
            saveOnClient({ url: url, id: id, isFavourite: true });
            if (props.reload) {
                props.reload();
            }
        }
    };
    return (
        <div className="card" ref={ref as any}>
            <img src={url} alt="Funny cat" />
            <button
                className={`card__addFavourite ${
                    isFavourite ? "favourite" : ""
                }`}
                onClick={handleFavouriteClick}
            >
                <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.4464 32.581L18.4435 32.5784C13.2532 27.8719 9.10769 24.1077 6.2356 20.5963C3.38649 17.1129 2 14.123 2 11C2 5.94457 5.94457 2 11 2C13.8744 2 16.6645 3.34787 18.4773 5.47668L20 7.26481L21.5227 5.47668C23.3355 3.34787 26.1256 2 29 2C34.0554 2 38 5.94457 38 11C38 14.1231 36.6135 17.1131 33.764 20.5993C30.8917 24.1133 26.7464 27.8822 21.5564 32.5985C21.5559 32.599 21.5554 32.5994 21.5549 32.5999L20.0051 34L18.4464 32.581Z"
                        fill="#f24e1e"
                        stroke="#F24E1E"
                        strokeWidth="4"
                    />
                </svg>
            </button>
        </div>
    );
});
export default memo(Card);
