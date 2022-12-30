import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function SendSms() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        from: '+18313185894',
        to: '',
        body: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const smsText = {
            ...formData
        }

        await fetch('/text', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(smsText)
        })
            .then(resp => {
                if (resp.ok) {
                    console.log('Text Sent')
                } else {
                    resp.json().then(data => {
                        console.log('Errors:', data)
                    })
                }
            })

        await fetch('/text')
            .then(resp => resp.json())
            .then(console.log('SMS Sent OK'))
    }

    function backToDashboard() {
        navigate('/dashboard')
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
                        Send SMS Promotion
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
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Message"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        variant="outlined"
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
            </Box>
        </>
    )
}

export default SendSms