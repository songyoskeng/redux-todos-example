import { VisibilityFilters, setVisibilityFilter } from '../actions';
import { handleActions } from 'redux-actions';
// let visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {

//     switch(action.type){
//       case 'SET_VISIBILITY_FILTER' : 
//       return action.filter
//     }
//     return state;
// }

const visibilityFilter = handleActions({
    [setVisibilityFilter](state,{payload:action}){
        return action.filter
    }
}, VisibilityFilters.SHOW_ALL)

export default visibilityFilter