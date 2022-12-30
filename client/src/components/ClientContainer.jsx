import React from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button, ListItemButton, ListItemIcon } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClientCard from "./ClientCard";
import { useNavigate } from "react-router-dom";

function ClientContainer({ clients, setClients }) {

    const navigate = useNavigate();

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
                            <ArrowBackIcon sx={{ fontSize: "40px" }}/>
                        </ListItemIcon>
                    </ListItemButton>
                    <Typography variant="h2">
                        Client List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{
                marginTop: 9,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center'
            }}>
                {clientCard}
            </Box>
        </>
    )
}

export default ClientContainer