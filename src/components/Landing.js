import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { signInFetch, tokenCheck } from "../utils/utils.js";
import { ReactComponent as KanDoLogo } from "../Images/Kan-Do-White.svg";
import styled from "@emotion/styled/macro";

const SignUpPageContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

const SignUpContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex-basis: shrink;
  text-align: center;
  align-content: center;
  align-items: center;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 10px;
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 32px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
`;

const LogoContainer = styled("div")`
  width: 30%;
`;

const Landing = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const returnValue = await signInFetch(email, password);
      setEmail(returnValue.email);
      setPassword(returnValue.password);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  useEffect(() => {
    tokenCheck(localStorage.getItem("MyToken"), setEmail);
  }, []);

  return (
    <SignUpPageContainer>
      <SignUpContainer>
        <LogoContainer>
          <KanDoLogo />
        </LogoContainer>
        <form onSubmit={signInHandler}>
          {/* <h2>Login Here!</h2> */}
          <label for="Email">Email</label>
          <input id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <label for="password">Password</label>
          <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button className="btn" type="submit">
            Sign In
          </button>
          <Link className="p" to="/signup">
            {" "}
            New user? create a free account here!{" "}
          </Link>
          <Link className="p" to="/reset-password">
            Forgotten your password? Click here to reset.
          </Link>
        </form>
      </SignUpContainer>
    </SignUpPageContainer>
  );
};

//react-redux.js.org/using-react-redux/accessing-store

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

// Todo - Replace the old style Redux connect() with updated hooks - https://react-redux.js.org/api/hooks
export default connect(mapStateToProps)(Landing);
