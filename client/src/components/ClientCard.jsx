import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

function ClientCard({client, setClients}) {

    const {id, first_name, last_name, email, phone_number} = client

    // console.log(`Test ${first_name} ${last_name} ${email} ${phone_number}`) //Works

    let editBtn = <EditBtn client={client} setClients={setClients} />
    let deleteBtn = <DeleteBtn client={client} setClients={setClients} />

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }}>
                    First Name: {first_name}
                </Typography>
                <Typography>
                    Last Name: {last_name}
                </Typography>
                <Typography>
                    Phone #: {phone_number}
                </Typography>
                <Typography>
                    Email: {email}
                </Typography>
                {deleteBtn}
            </CardContent>
        </React.Fragment>
    );

    return (
        <Box>
        <Card variant="outlined">{card}</Card>
        </Box>
    )
}

export default ClientCard