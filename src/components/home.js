import {RiLockPasswordFill} from "react-icons/ri";
export const HomeComp = ({setUsername,setPassword,signInHandler,PasswordHide}) => {
    return(
        <div className="home">
            <form onSubmit={() => signInHandler}>
            <h2>Login Here!</h2>
            <label for="Email">Email</label>
            <input id = "email" onChange={(e) => setUsername(e.target.value)} placeholder="Email"/>
            <label for="password">Password</label>
            <input id = "password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit">Sign In</button>
            <p className="p">New user? create a free account here!</p>
            <p className="p">Forgotten your password? Click here to reset.</p>
        </form>
        </div>
    )
}
