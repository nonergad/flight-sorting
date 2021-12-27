import React from 'react';


const MainReducer = (state= [],action) =>{
    switch(action.type){
        case'FETCH':
            return  action.payload
        default:
            return state ;
    }
}

export default MainReducer;