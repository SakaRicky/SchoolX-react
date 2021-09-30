import {SETSTUDENT} from './studentActionsTypes'

export const initialState = null;

export const studentReducer = (state, action) => {
    switch (action.type) {
        case SETSTUDENT:
            return action.data
    
        default:
            return state;
    }
}