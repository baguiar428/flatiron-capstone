import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button, ListItemButton, ListItemIcon } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import SmsClientCard from "./SmsClientCard";
import SendSmsCard from "./SendSmsCard";


function SendSms({ clients }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        from: '+18313185894',
        body: ''
    })

    const initialSmsFormState = {
        from: '+18313185894',
        body: ''
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const [sendSmsList, setSendSmsList] = useState([]);

    const smsList = sendSmsList.map(contact =>
        <SendSmsCard contact={contact} />)

    const smsClientCard = clients.map(client =>
        <SmsClientCard key={client.id} client={client} sendSmsList={sendSmsList} setSendSmsList={setSendSmsList} formData={formData} setFormData={setFormData} />)

    async function handleSubmit(e) {
        e.preventDefault()
        const smsText = {
            ...formData,
            to: sendSmsList
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
        setSendSmsList([])
        setFormData(initialSmsFormState)
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
                    <ListItemButton onClick={backToDashboard}>
                        <ListItemIcon>
                            <ArrowBackIcon sx={{ fontSize: "40px" }} />
                        </ListItemIcon>
                    </ListItemButton>
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
            }}>{smsList}
            </Box>
            <Box sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Message"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
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
            </Box>
            <Box sx={{
                marginTop: 2
            }}>
                {smsClientCard}
            </Box>
        </>
    )
}

export default SendSms