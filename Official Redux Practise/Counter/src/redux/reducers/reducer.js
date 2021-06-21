
import {ACTIONS} from '../actions/actionTypes';

export const initialState = {
    count:0
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        
        case ACTIONS.INCREMENT:
            return {
                count:state.count+1
            }
        
        case ACTIONS.DECREMENT:
            return {
                count:state.count-1
            }

        case ACTIONS.RESET:
            return {
                count:0
            }

        default:
            return state;
    }
}

export default reducer;
