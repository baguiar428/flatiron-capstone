import React from "react";
import ClientCard from "./ClientCard";

function ClientContainer({clients, setClients}) {

    const clientCard = clients.map(client =>
        <ClientCard key={client.id} client={client} setClients={setClients}/>)

    return (
        <>
            {clientCard}
        </>
    )
}

export default ClientContainer