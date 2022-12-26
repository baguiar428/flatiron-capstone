import React, {useState} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';

function App() {

  const [loginStatus, setLoginStatus] = useState(!!sessionStorage.getItem("user_id"))

    return (
    <div>
      <Routes>
        <Route path="/" element={<Home loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
        <Route path="/login" element={<Login setLoginStatus={setLoginStatus} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>  
    </div>
  );
}

export default App;

// Code for Sessions Testing

// import { useState, useEffect } from "react";

// const [count, setCount] = useState(0);

// useEffect(() => {
//   fetch("/hello")
//     .then((r) => r.json())
//     .then((data) => setCount(data.count));
// }, []);
// return (
//   <div className="App">
//     <h1>Page Count: {count}</h1>
//   </div>
