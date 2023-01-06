import React from "react";
import { InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Calendar() {

    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
        <>
            <Button sx={{ ml: 2, mt: 2}} variant="contained" onClick={goHome}>Exit</Button>
            <InlineWidget url="https://calendly.com/baguiar428" />
        </>
    )
}

export default Calendar