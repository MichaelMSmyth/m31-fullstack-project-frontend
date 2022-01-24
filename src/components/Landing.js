import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Landing = ({ setUsername, setPassword, signInHandler }) => {
  return (
    <div className="centerr signup">
      <form onSubmit={() => signInHandler}>
        <h2>Login Here!</h2>
        <label for="Email">Email</label>
        <input id="email" onChange={(e) => setUsername(e.target.value)} placeholder="Email" />
        <label for="password">Password</label>
        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="btn" type="submit">
          Sign In
        </button>
        <Link className="p" to="/signup">
          {" "}
          New user? create a free account here!{" "}
        </Link>
        <Link className="p" to="/reset-pass">
          Forgotten your password? Click here to reset.
        </Link>
      </form>
    </div>
  );
};

//react-redux.js.org/using-react-redux/accessing-store

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

// Todo - Replace the old style Redux connect() with updated hooks - https://react-redux.js.org/api/hooks
export default connect(mapStateToProps)(Landing);
