// TODO integrate navbar component
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiLayout, FiX, FiLogOut } from "react-icons/fi";
import { BsQuestionDiamondFill } from "react-icons/bs";

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
            <button className="nodeco hamburger" onClick={toggler}>
              <FiMenu />
            </button>
          ) : (
            <button className="nodeco x" onClick={toggler}>
              <FiX />
            </button>
          )}
        </div>
        {/* ):(<div/>)} */}
        {!modal && (
          <ul className="navactive neumorph card">
            <div className="column">
              <li>
                <Link to="/boards">
                  <FiLayout />
                  Boards
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsQuestionDiamondFill />
                  About
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
