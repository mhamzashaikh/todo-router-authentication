import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import './todos/Input.css';



function Home() {
    const [userTodo, setUserTodo] = useState([]);
    const [text, setText] = useState("");
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    // Update LocalStorage if any change made in userTodo;
    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(userTodo))
    },[userTodo]);


    // For Storing input Text in setText
    const storingText = (e) => {
        setText(e.target.value)

    }

    // For Add Button
    const updateList = () => {

        setUserTodo([...userTodo, text]);

        setText("");
    }



    // For Delete All Button
    const deleteAll = () => {
        setUserTodo([]);
    }





    return (
        <>



            <Link to="/todolist">Todo List</Link>


            <h1>Home</h1>

            <div className='inputContainer'>
                <input type="text" placeholder="Enter here....." value={text} onChange={storingText} />

                <div className="myButtonContainer">
                    <button className='myButtons' onClick={updateList}>Add Item</button>
                    <button className='myButtons' onClick={deleteAll}>Delete All</button>
                </div>
            </div>



            <button onClick={() =>
                auth.signout(() => {
                    navigate("/login");
                    localStorage.removeItem("loginUser");
                })}>Signout</button>



        </>


    )
}

export default Home;