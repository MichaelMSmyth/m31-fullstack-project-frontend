import { useState } from "react";
import { updateFetch,deleteFetch } from "../utils/utils";

const Settings = () => {
    const [user,setUser] = useState();
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    
    const updateHandler = async (e) => {
        e.preventDefault();
        try {
            await updateFetch(username, email);
            setUser(username);
            setEmail(email);
            alert(`Successfully updated Username to ${username}`);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
            alert("error");
        }
    };

    const deleteHandler = async () => {
        await deleteFetch(user, setUser);
        localStorage.clear();
    };

    return(
        <div>
            <div className="centerr signup">
            <form onSubmit={updateHandler}>
            <h2>Update Username</h2>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Confirm Email"/>
            <button className="btn" type="submit">Update</button>
            </form>
            </div>
            <button className="dlt" onClick={deleteHandler}>Delete Account?</button>
        </div>
    )
}

export default Settings;