import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom'


function EditBtn({ client, setClients }) {

    const navigate = useNavigate()

    function edit() {
        navigate('/edit-client', { state: { client: client } })
    }
    return (
        <Button
            onClick={edit}
            client={client}
            variant="contained">
            Edit
        </Button>
    )
}

export default EditBtn