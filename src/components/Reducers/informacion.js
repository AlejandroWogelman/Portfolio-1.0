import const_info from '../../Constates/const_info'
import {GENERAL, HOBBIES, ESTUDIOS} from './actions/informacion'

export const initialState= const_info;

export const infReducer = (state= initialState, action)=>{
    switch (action.type) {
        case GENERAL:
                
                return [initialState[0]]
        case HOBBIES:
                
                return [initialState[2]]
        case ESTUDIOS:
                
                return [initialState[1]]
        default:
            break;
    }
}