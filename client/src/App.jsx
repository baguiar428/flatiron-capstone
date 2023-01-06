import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';
import CreateClient from './components/CreateClient';
import ClientContainer from './components/ClientContainer';
import EditClient from './components/EditClient';
import SendSms from './components/SendSms';
import SendEmail from './components/SendEmail';

function App() {

  const [loginStatus, setLoginStatus] = useState(!!sessionStorage.getItem("user_id"))
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('')

  const filteredClients = clients.filter(client =>
    client.first_name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch('/clients')
      .then(res => res.json())
      .then(setClients);
  }, []);

  //console.log(clients) //Works

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
        <Route path="/login" element={<Login setLoginStatus={setLoginStatus} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/dashboard" element={<Dashboard loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
        <Route path="/create-client" element={<CreateClient clients={clients} setClients={setClients} />} />
        <Route path="/edit-client" element={<EditClient setClients={setClients} />} />
        <Route path="/clients" element={<ClientContainer clients={filteredClients} setClients={setClients} search={search} setSearch={setSearch} />} />
        <Route path="/send-sms" element={<SendSms clients={clients} />} />
        <Route path="/send-email" element={<SendEmail clients={clients} />} />
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