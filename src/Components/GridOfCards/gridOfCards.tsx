import { forwardRef } from "react";
import { CatInfo } from "../../Types/types";
import Card from "../Card/card";
import "./gridOfCards.scss";

interface GridOfCardsProps {
    cats: CatInfo[];
}

const GridOfCards = forwardRef((props: GridOfCardsProps, ref) => {
    return (
        <div className="gridOfCards">
            {props.cats.map((cat, idx) => {
                if (idx === props.cats.length - 1) {
                    return (
                        <Card
                            url={cat.url}
                            key={cat.id}
                            id={cat.id}
                            isFavourite={cat.isFavourite}
                            ref={ref}
                        />
                    );
                }
                return (
                    <Card
                        url={cat.url}
                        key={cat.id}
                        id={cat.id}
                        isFavourite={cat.isFavourite}
                    />
                );
            })}
        </div>
    );
});
export default GridOfCards;
