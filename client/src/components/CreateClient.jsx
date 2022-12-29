import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, Button } from "@mui/material";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function CreateClient({ clients, setClients }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const client = {
      ...formData
    }

    await fetch('/clients', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(client)
    })
      .then(resp => {
        if (resp.ok) {
          console.log('Client Added')
        } else {
          resp.json().then(data => {
            console.log('Errors: ', data)
          })
        }
      })

    await fetch('/clients')
      .then(resp => resp.json())
      .then(resp => {
        setClients(resp)
        navigate('/clients')
      })
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

export default CreateClient