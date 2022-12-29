import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

function NavBar({ loginStatus, setLoginStatus }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("user_id")) {
            setLoginStatus(sessionStorage.getItem("user_id"))
        } else {
            setLoginStatus(!!sessionStorage.getItem("user_id"))
        }
    }, [loginStatus])

    function login() {
        navigate('/login');
    }

    function schedule() {
        navigate('/calendar')
    }

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => sessionStorage.clear())
            .then(setLoginStatus(false))
        console.log('Logout Worked')
        navigate('/')
    }

    const isLoggedIn = loginStatus ? <Button variant="contained" onClick={handleLogout}>Logout</Button>
        : <> <Button variant="contained" onClick={schedule}>Book an Appointment</Button>
            <Button sx={{ ml: 2 }} variant="contained" onClick={login}>Login</Button></>

    return (
        <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            {isLoggedIn}
        </Box>
    )
}

export default NavBar