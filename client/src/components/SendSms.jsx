import React from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button } from "@mui/material";


function SendSms() {
    return (
        <>
              <AppBar sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Toolbar>
          <Typography variant="h2">
            Client Info Form
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
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="E-Mail"
            name="email"
            value={formData.email}
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
            Save
          </Button>
        </form>
      </Box>
        </>
    )
}

export default SendSms