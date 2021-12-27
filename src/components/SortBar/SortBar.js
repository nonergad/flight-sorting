import React from 'react'
import {useDispatch, useSelector} from "react-redux";

export default function SortBar() {
   const dispatch = useDispatch();
    const sortDuration = useSelector((state) => state.FilterReducer.sortDuration)

    const sortDurationChange = (status) => {
        console.log(status.target.id)
        if (status.target.id === 'sortForwardDuration') {
            dispatch({type: 'SORT', payload: 1})
        }else if(status.target.id === 'increasePrice'){
            dispatch({type: 'SORT', payload: -1})
        }else if(status.target.id === 'decreasePrice'){
            dispatch({type: 'SORT', payload: 0})
        }
    }

    return (
        <div>
            <input type='radio' id='increasePrice' name='sortBlock'  onChange={(elem) => sortDurationChange(elem)}/>
            <label htmlFor="increasePrice">По возрастанию</label>
            <input type='radio' id='decreasePrice' name='sortBlock'  onChange={(elem) => sortDurationChange(elem)}/>
            <label htmlFor="decreasePrice">По убыванию</label>
            <input type='radio' id='sortForwardDuration' name='sortBlock' onChange={(elem) => sortDurationChange(elem)}/>
            <label htmlFor="sortForwardDuration">По времени в пути</label>
        </div>
    )
}
