import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button, ListItemButton, ListItemIcon } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClientCard from "./ClientCard";
import { useNavigate } from "react-router-dom";

function ClientContainer({ clients, setClients, search, setSearch }) {

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // console.log('Search Submitted')
        setSearch(search)
    }

    function backToDashboard() {
        navigate('/dashboard')
    }

    const clientCard = clients.map(client =>
        <ClientCard key={client.id} client={client} setClients={setClients} />)

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
                        Client List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ marginTop: 13 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        style={{ width: "400px", margin: "5px" }}
                        type="text"
                        label="Search"
                        name="search"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        variant="outlined" />
                </form>
            </Box>
            <Box sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column'
            }}>
                {clientCard}
            </Box>
        </>
    )
}

export default ClientContainer