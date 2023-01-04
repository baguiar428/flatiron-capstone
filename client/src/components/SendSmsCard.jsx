import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function SendSmsCard({ contact }) {


    const sendSms = (
        <React.Fragment>
            <CardContent>
                <Typography>
                    {contact}
                </Typography>
            </CardContent>
        </React.Fragment>
    )
    return (
        <Card sx={{marginTop: 1,marginBottom: 1 }}>{sendSms}</Card>
    )
}

export default SendSmsCard