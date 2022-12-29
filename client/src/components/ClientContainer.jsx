import React from "react";
import ClientCard from "./ClientCard";

function ClientContainer({clients}) {

    const clientCard = clients.map(client =>
        <ClientCard key={client.id} client={client} />)

    return (
        <>
            {clientCard}
        </>
    )
}

export default ClientContainer