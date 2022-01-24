import { Link } from "react-router-dom";

const ResetPassword = ({ setEmail }) => {
  return (
    <div className="centerr signup">
      <form>
        <h2>Reset your Password</h2>
        <p>--------------------------------------------------------</p>
        <h2>Enter Your email Address to get a password reset link</h2>
        <label for="Email">Email</label>
        <input id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button className="btn" type="submit">
          Get Email
        </button>
        <Link to="/" className="p">
          Go Back?
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
