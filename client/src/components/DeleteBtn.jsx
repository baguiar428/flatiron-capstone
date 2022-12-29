import { Button } from "@mui/material";
import React from "react";

function DeleteBtn({client, setClients}) {

    const {id} = client

    async function deleteClient() {
        await fetch(`/clients/${id}`, {
            method: 'DELETE'
        })
        await fetch('clients')
         .then(resp => resp.json())
         .then(resp => setClients(resp))
    }

    return (
        <Button
            onClick={deleteClient} 
            variant="contained">Delete</Button>
    )
}

export default DeleteBtn