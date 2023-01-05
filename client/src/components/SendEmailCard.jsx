import React from "react";
import { Card, CardContent, Typography } from "@mui/material";


function SendEmailCard({contact}) {

    const sendEmail = (
        <React.Fragment>
        <CardContent>
            <Typography>
                {contact}
            </Typography>
        </CardContent>
    </React.Fragment>
    )
    return (
        <Card sx={{marginTop: 1,marginBottom: 1 }}>{sendEmail}</Card>
        )
}

export default SendEmailCard