import React from 'react';

const initialState = {
    countTicketRender: 2
}

const RenderCountReducer = (state= initialState,action) =>{
    switch(action.type){
        case'CHANGE':
            return {...state, countTicketRender: action.payload}
        default:
            return state ;
    }
}

export default RenderCountReducer;