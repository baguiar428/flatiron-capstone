import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button } from "@mui/material";

function EmailClientCard({client, sendEmailList, setSendEmailList, formData, setFormData}) {

    //Took out id from destructure below. I think I would need it to be able to 
    //implement a delete from sendEmailList. {id,}
    const { first_name, last_name, email, phone_number } = client

    function addClientEmailList() {
        setSendEmailList([...sendEmailList, email])
        setFormData({ ...formData, email: email})
    }

    const emailCard = (
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
            <Button
                onClick={addClientEmailList}
                variant="contained" >
                Send Email
            </Button>
        </CardContent>
    </React.Fragment>
    )
    return (
        <Card variant="outlined">{emailCard}</Card>
    )
}

export default EmailClientCard