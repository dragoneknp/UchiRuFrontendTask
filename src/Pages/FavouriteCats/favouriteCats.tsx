import GridOfCards from "../../Components/GridOfCards/gridOfCards";
import { useAppSelector } from "../../Hooks/useRedux";
import PageLayout from "../../Layout/pageLayout";
import { catSelector } from "../../Store/selectors";
import { getFavouriteCats } from "../../Utils/clientStorage";
import "./favouriteCats.scss";
const FavouriteCats = () => {
    const { cats, isLoading, error } = useAppSelector(catSelector);

    return (
        <PageLayout>
            <GridOfCards cats={getFavouriteCats() || []} />
        </PageLayout>
    );
};
export default FavouriteCats;
