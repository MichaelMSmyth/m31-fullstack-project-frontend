import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { signUpFetch } from "../utils/utils";

const SignUp = () => {
    const [user,setUser] = useState();
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const signUpHandler = async (e) => {
        e.preventDefault();
        const returnValue = await signUpFetch(username,email,password);
        setUser(returnValue.user.username)
    }
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

export default SignUp;

