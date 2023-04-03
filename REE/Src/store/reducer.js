import { ADDITION , SUBTRACTION } from "./actionType";

const initialstate = {
    count : 0
}

export const mainReducer = (state=initialstate,action) =>{

    switch(action.type)
    {
        case ADDITION:
           return{...state,count : state.count+1};
             break;

        case SUBTRACTION:
            return{...state,count : state.count-1};
              break;
        default : 
         return state
    }
};