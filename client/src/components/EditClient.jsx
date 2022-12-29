import React from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function EditClient() {
    const navigate = useNavigate();

    function backToDashboard() {
        navigate('/dashboard')
    }

    return (
        <>
                <AppBar sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
            <Toolbar>
                <Typography variant="h2">
                    Edit Client Info
                </Typography>
            </Toolbar>
        </AppBar>
        <Box sx={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
        <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="First Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Last Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Phone Number"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="E-Mail"
          variant="outlined"
        />
        <br />
        <Button 
            sx={{ml: 1}} 
            variant="contained" 
            color="secondary"
            onClick={backToDashboard}>
                Cancel
        </Button>
        <Button sx={{ml: 4}}  variant="contained" color="primary">Save</Button>
        </form>
        </Box>
        </>
    )
}

export default EditClient