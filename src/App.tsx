import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllCats from "./Pages/AllCats/allCats";
import FavouriteCats from "./Pages/FavouriteCats/favouriteCats";

import { store } from "./Store/store";
const App = () => {
    
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllCats />} />
                    <Route path="/favourite" element={<FavouriteCats />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
