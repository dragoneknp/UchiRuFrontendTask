import { useEffect, useRef, useState } from "react";
import GridOfCards from "../../Components/GridOfCards/gridOfCards";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import PageLayout from "../../Layout/pageLayout";
import { getCats } from "../../Store/ActionCreators/getCats";
import { catSelector } from "../../Store/selectors";
import "./allCats.scss";
const AllCats = () => {
    const dispatch = useAppDispatch();
    const { cats, isLoading, error } = useAppSelector(catSelector);
    const lastCard = useRef(null);
    
    useEffect(() => {
        if (cats === [] || !cats || cats.length === 0) {
            dispatch(getCats());
        }
    }, []);

    useEffect(() => {
        if (lastCard.current) {
            infinteObserver.observe(lastCard.current);
        }
    }, [cats]);

    const infinteObserver = new IntersectionObserver(
        ([entry], observer) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                dispatch(getCats());
            }
        },
        { threshold: 1 }
    );

    return (
        <PageLayout>
            <GridOfCards cats={cats} ref={lastCard} />
            {isLoading ? (
                <div style={{ textAlign: "center", margin: "48px 0 32px 0" }}>
                    Загружаем еще пачку котиков
                </div>
            ) : null}
        </PageLayout>
    );
};
export default AllCats;
