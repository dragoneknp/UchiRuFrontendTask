import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
const Header = () => {
    const history = useLocation();

    return (
        <header className="header">
            <ul className="header-routing">
                <li
                    className={`header-routing__route ${
                        history.pathname === "/" ? "active" : ""
                    }`}
                >
                    <Link to="/">Все котики</Link>
                </li>
                <li
                    className={`header-routing__route ${
                        history.pathname === "/favourite" ? "active" : ""
                    }`}
                >
                    <Link to="/favourite">Любимые котики</Link>
                </li>
            </ul>
        </header>
    );
};
export default memo(Header);
