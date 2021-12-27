import React from 'react';

const FilterReducer = (state= 0,action) =>{
    switch(action.type){
        case'SORT':
            return action.payload
        default:
            return state ;
    }
}

export default FilterReducer;