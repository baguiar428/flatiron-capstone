import './App.css';
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

    return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
