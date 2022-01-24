import {Link} from "react-router-dom";

export const SignUp = (setUsername,setPassword,setEmail,signUpHandler) => {
    return(
        <div className="centerr signup">
            <form onSubmit={signUpHandler}>
            <h2>Create your Free Account!</h2>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type = "password"/>
            <button className="btn" type="submit">Get Started!</button>
            <Link to="/" className="p">Go Back?</Link>
            </form>
        </div>
    )
}
