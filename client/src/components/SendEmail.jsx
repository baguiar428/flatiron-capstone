import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button, ListItemButton, ListItemIcon } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import SendEmailCard from "./SendEmailCard";
import EmailClientCard from "./EmailClientCard";


function SendEmail({ clients }) {

    const [formData, setFormData] = useState({
        user:
        {
            subject: '',
            body: ''
        }
    })

    const initialEmailFormState = {
        user:
        {
            subject: '',
            body: ''
        }
    }

    const navigate = useNavigate();


    const [sendEmailList, setSendEmailList] = useState([])

    const emailList = sendEmailList.map(contact =>
        <SendEmailCard contact={contact} />)

    const emailClientCard = clients.map(client =>
        <EmailClientCard key={client.id} client={client} sendEmailList={sendEmailList} setSendEmailList={setSendEmailList} formData={formData} setFormData={setFormData} />)

    function backToDashboard() {
        navigate('/dashboard')
    }

    function handleChange(e) {
        const { name, value } = e.target
        const newVal = { ...formData }
        newVal.user[name] = value
        setFormData(newVal)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const email = {
            ...formData,
            email: sendEmailList
        }
        await fetch('/email', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        })
            .then(resp => {
                if (resp.ok) {
                    console.log('Email Sent')
                } else {
                    resp.json().then(data => {
                        console.log('Errors:', data)
                    })
                }
            })
        setSendEmailList([])
        setFormData(initialEmailFormState)
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
                        Send Email Promotion
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{
                marginTop: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>{emailList}
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
                        label="Subject:"
                        name="subject"
                        value={formData.user.subject}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Message:"
                        name="body"
                        value={formData.user.body}
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
                {emailClientCard}
            </Box>
        </>
    )
}

export default SendEmail