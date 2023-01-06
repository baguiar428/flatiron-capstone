import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button } from "@mui/material";

function SmsClientCard({ client, sendSmsList, setSendSmsList, formData, setFormData }) {

    //Took out id from destructure below. I think I would need it to be able to 
    //implement a delete from sendSmsList. {id,}
    const { first_name, last_name, email, phone_number } = client

    function addClientSmsList() {
        setSendSmsList([...sendSmsList, phone_number])
        setFormData({ ...formData, to: phone_number })
        console.log(sendSmsList)
    }
    const smsCard = (
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
                    onClick={addClientSmsList}
                    variant="contained" >
                    Send SMS
                </Button>
            </CardContent>
        </React.Fragment>
    );

    return (
        <Box>
            <Card 
            name="to"
            value={formData.to}
            variant="outlined">{smsCard}</Card>
        </Box>
    )
}

export default SmsClientCard