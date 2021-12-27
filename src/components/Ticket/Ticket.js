import React from 'react'
import HalfTicket from '../HalfTicket/HalfTicket.js'
export default function Ticket(props) {
    return (
        <div>
            <HalfTicket data={props.data.forwardTicket}/>
            <HalfTicket data={props.data.backTicket}/>
        </div>
    )
}
