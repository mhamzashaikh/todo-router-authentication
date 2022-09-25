import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function Home() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();


    return (
        <>
            <h1>Home</h1>
            <button onClick={() =>
                auth.signout(() => {
                    navigate("/login");
                    localStorage.removeItem("loginUser");
                })}>Signout</button>
        </>

    )
}

export default Home;