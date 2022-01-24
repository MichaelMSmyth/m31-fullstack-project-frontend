// TODO integrate navbar component
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiLayout, FiX, FiLogOut, FiGitlab } from "react-icons/fi";

const NavBar = () => {
    const [modal, setModal] = useState(true);
    const [log, Setlog] = useState(true);

    const isLoggedIn = () => {
        log ? Setlog(false) : Setlog(true);
    };
    const toggler = () => {
        modal ? setModal(false) : setModal(true);
    };
    return (
        <div>
        <nav>
            {/* {!log ? ( */}
            <div>
            {modal ? (
                <button className="nodeco hamburger react-icons" onClick={toggler}>
                <FiMenu />
                </button>
            ) : (
                <button className="nodeco x react-icons" onClick={toggler}>
                <FiX />
                </button>
            )}
            </div>
            {/* ):(<div/>)} */}
            {!modal && (
            <ul className="navactive neumorph card">
                <div className="column">
                <li>
                    <Link to="/home">
                    <FiLayout />
                    Boards
                    </Link>
                </li>
                <li>
                    <Link to="/get-started">
                    <FiGitlab />
                    Get Started
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FiLogOut />
                    Logout
                    </Link>
                </li>
                </div>
            </ul>
            )}
        </nav>
        </div>
    );
};

export default NavBar;
