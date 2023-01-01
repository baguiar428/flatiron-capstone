import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function SendEmail() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        body: ''
    })

    const navigate = useNavigate();

    function backToDashboard() {
        navigate('/dashboard')
    }

    function handleChange(e) {
        const { name, value } = e.target 
        setFormData({ ...FormData, [name]: value})
    }

    function handleSubmit() {

    }

    return (
        <>            
        <AppBar sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Toolbar>
                <Typography variant="h2">
                    Send Email Promotion
                </Typography>
            </Toolbar>
        </AppBar>
        <Box sx={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="To:"
                    // name="to"
                    // value={formData.to}
                    // onChange={handleChange}
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Email:"
                    // name="to"
                    // value={formData.to}
                    // onChange={handleChange}
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Subject:"
                    // name="to"
                    // value={formData.to}
                    // onChange={handleChange}
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Message:"
                    // name="body"
                    // value={formData.body}
                    // onChange={handleChange}
                    variant="outlined"
                    multiline
                />
                <br />
                <Button
                    sx={{ ml: 1 }}
                    variant="contained"
                    color="secondary"
                    onClick={backToDashboard}>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    sx={{ ml: 4 }}
                    variant="contained"
                    color="primary">
                    Send
                </Button>
            </form>
        </Box></>
    )
}

export default SendEmail