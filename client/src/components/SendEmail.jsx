import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendEmailCard from "./SendEmailCard";
import EmailClientCard from "./EmailClientCard";


function SendEmail({clients}) {

    const [formData, setFormData] = useState({
        user:
        {
            // name: '',
            // email: '',
            subject: '',
            body: ''
        }
    })

    const navigate = useNavigate();

    //Experimental
    const [sendEmailList, setSendEmailList] = useState([])
    
    const emailList = sendEmailList.map(contact =>
       <SendEmailCard contact={contact}/>)
    const emailClientCard = clients.map(client =>
        <EmailClientCard key={client.id} client={client} sendEmailList={sendEmailList} setSendEmailList={setSendEmailList} formData={formData} setFormData={setFormData}/>)
    //End

    function backToDashboard() {
        navigate('/dashboard')
    }

    function handleChange(e) {
        const { name, value } = e.target 
        const newVal = { ...formData}
        newVal.user[name]=value
        console.log(newVal)
        // setFormData({ ...formData, [name]: value})
        setFormData(newVal)

        console.log(name)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const email = {
            ...formData,
            email: sendEmailList
        }
        console.log(formData)

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
        // await fetch('/email')
        //     .then(resp => resp.json())
        //     .then(console.log('Email Sent Ok'))
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
            }}>{emailList}
            </Box>
        <Box sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <form onSubmit={handleSubmit}>
                {/* <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Name:"
                    name="name"
                    value={formData.user.name}
                    onChange={handleChange}
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Email:"
                    name="email"
                    value={formData.user.email}
                    onChange={handleChange}
                    variant="outlined"
                />
                <br /> */}
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