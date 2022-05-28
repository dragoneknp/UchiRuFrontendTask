import { useEffect } from "react";
import GridOfCards from "../../Components/GridOfCards/gridOfCards";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import PageLayout from "../../Layout/pageLayout";
import { getCats } from "../../Store/ActionCreators/getCats";
import { catSelector } from "../../Store/selectors";
import { getFavouriteCats } from "../../Utils/clientStorage";
import "./favouriteCats.scss";
const FavouriteCats = () => {
    const { cats, isLoading, error } = useAppSelector(catSelector);

    return (
        <PageLayout>
            <GridOfCards
                cats={
                    cats.length > 0
                        ? cats.filter((cat) => cat.isFavourite === true)
                        : getFavouriteCats() || []
                }
            />
        </PageLayout>
    );
};
export default FavouriteCats;
