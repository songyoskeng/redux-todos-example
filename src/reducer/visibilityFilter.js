import { VisibilityFilters } from '../actions';
let visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {

    switch(action.type){
      case 'SET_VISIBILITY_FILTER' : 
      return action.filter
    }
    return state;
}

export default visibilityFilter