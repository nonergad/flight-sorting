import React, {useEffect} from 'react';
import HalfTicket from "../HalfTicket/HalfTicket.js";
import ticketsArr from "../../reduceJson";
import {useDispatch, useSelector} from "react-redux";
import Ticket from "../Ticket/Ticket";
import RenderCountReducer from "../../redux/reducers/RenderCountReducer";
import SortBar from "../SortBar/SortBar";
function MainComponent(props) {


    const allTickets = useSelector((state) => state.MainReducer)
    const renderAmount = useSelector((state) => state.RenderCountReducer.countTicketRender)
    const filterReducer = useSelector((state) => state.FilterReducer)
    const dispatch = useDispatch()

    const fetchLimit =  () => {
        dispatch({type: 'CHANGE', payload: renderAmount+2});
    }

    useEffect(() =>{
        fetch(`https://air-ticket-master-2fcwpc3lgqhu.herokuapp.com/filter?limit=2`)
            .then(res=>res.json())
            .then(resp => dispatch({type:'FETCH', payload: resp}))
    },[])

    useEffect(() => {
        if(filterReducer )
        fetch(`https://air-ticket-master-2fcwpc3lgqhu.herokuapp.com/filter?limit=${renderAmount}`)
            .then(res=>res.json())
            .then(resp => dispatch({type:'FETCH', payload: resp}))
    },[renderAmount, filterReducer])


    return (
        <div>
            <SortBar/>
            {allTickets.map((element, index) =>{
                    return (
                        <Ticket key={index} data={element}/>
                    )
            })}
            <button onClick={fetchLimit}>Показать еще</button>
        </div>
    );
}

export default MainComponent;