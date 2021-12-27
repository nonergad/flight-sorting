import React from 'react'
import './HalfTicket.module.scss'

// airline: "AF"
// airportDep: "ШЕРЕМЕТЬЕВО"
// airpotArrival: "Лондон, Хитроу"
// arrivalDate: "2020-08-18T16:25:00"
// cityArrival: "ЛОНДОН"
// cityDep: "Москва"
// departureDate: "2020-08-18T06:10:00"
// totalDuration: 330
// transfer: 1
// uidArrival: "CDG"
// uidDep: "SVO"

export default function HalfTicket(props) {
    return (
        <div>
            <p className='flightInfo'>{props.data.cityDep}, {props.data.airportDep} ({props.data.uidDep}) → {props.data.cityArrival}, {props.data.airpotArrival} ({props.data.uidArrival})</p>
            <div className='bigLine'></div>
            <div>
                <div>
                    <div>
                        {props.data.departureDate}
                    </div>
                    <div>
                        {props.data.departureDate}
                    </div>
                    <div>
                    🕗 {props.data.totalDuration}
                    </div>
                    <div>
                        {props.data.arrivalDate}
                    </div>
                    <div>
                        {props.data.arrivalDate}
                    </div>
                </div>
            </div>
        </div>
    )
}
