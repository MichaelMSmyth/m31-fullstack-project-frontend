// TODO integrate navbar component
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiLayout, FiSettings, FiLogOut, FiGitlab } from "react-icons/fi";
import { logOut } from "../utils/utils";

const NavBar = () => {
    const [modal, setModal] = useState(true);
    const [log, Setlog] = useState(true);

    const isLoggedIn = () => {
        log ? Setlog(false) : Setlog(true);
    };
    const toggler = () => {
        modal ? setModal(false) : setModal(true);
    };

    const logOutHandler = async () => {
        await logOut();
        window.location.reload(false);
    };

    return (
        <div>
        <nav>
                <input type="checkbox" id="menu-toggle"/>
                <label htmlFor="menu-toggle"className=" hamburger react-icons menu-icon" onClick={toggler}><FiMenu/></label>
            <div className="slideout-sidebar">
            <ul>
                <div>
                <li>
                    <Link className="navsize" to="/home">
                    <FiLayout />
                    Your Board
                    </Link>
                </li>
                <li>
                    <Link className="navsize" to="/get-started">
                    <FiGitlab />
                    Get Started
                    </Link>
                </li>
                <li>
                    <Link className="navsize" to="/settings">
                    <FiSettings  />
                    Settings
                    </Link>
                </li>
                <li>
                    <Link className="navsize" to="/" onClick={logOutHandler}>
                    <FiLogOut />
                    Logout
                    </Link>
                </li>
                </div>
            </ul>
            </div>
        </nav>
        </div>
    );
};

export default NavBar;
