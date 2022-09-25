import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddTodo from './components/AddTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthContext from './AuthContext';
import ProtectedWrapper from './ProtectedWrapper';
import { useState } from 'react';


function App() {

  let[user, setUser] = useState(null);

  function signin() {

  }

  function signout() {

  }



  let value = { user, setUser };

  console.log("user is:", user);




  return (
    <AuthContext.Provider value={value} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedWrapper name="hello">
              <Home />
            </ProtectedWrapper>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addtodo" element={
            <ProtectedWrapper name="hello">
              <AddTodo />
            </ProtectedWrapper>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>



  );
}

export default App;
