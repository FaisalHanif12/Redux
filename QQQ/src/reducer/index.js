
import { Addition,} from "../actions";
import { Subtraction } from "../actions";

const initialstate = {
    counter : 0
}

export const mainReducer=(State = initialstate , action)=>{
   
    switch (action.type){     
        case  Addition: 
           return {...State, counter: State.counter + 1};
        case Subtraction: 
           return {...State, counter: State.counter - 1};
        default: 
           return State;
    }
};