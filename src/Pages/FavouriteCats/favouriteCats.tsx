import { useEffect, useState } from "react";
import GridOfCards from "../../Components/GridOfCards/gridOfCards";
import { useAppSelector } from "../../Hooks/useRedux";
import PageLayout from "../../Layout/pageLayout";
import { catSelector } from "../../Store/selectors";
import { CatInfo } from "../../Types/types";
import { getFavouriteCats } from "../../Utils/clientStorage";
import "./favouriteCats.scss";
const FavouriteCats = () => {
    const [cats, changeCats] = useState<CatInfo[] | null>(getFavouriteCats());
    const [isReloading, changeReload] = useState<boolean>(false);
    const handleReload = () => changeReload(!isReloading);
    useEffect(() => {
        changeCats(getFavouriteCats());
    }, [isReloading]);
    return (
        <PageLayout>
            <GridOfCards cats={cats || []} reload={handleReload}/>
        </PageLayout>
    );
};
export default FavouriteCats;
