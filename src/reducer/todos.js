import {initialState} from '../config'

let reducer = (state = initialState, action) => {

    let _state = Object.assign({},state);
    switch(action.type){
        case 'ADD_TODO' : 
        _state.list = [...state.list, {id:action.id, text: action.text, completed: action.completed}]
        return _state
        break

        case 'DELETE_TODO':
        _state.list = _state.list.map(t => t.id != action.id)
        return _state 
        break
 
        case 'TOGGLE_TODO' :
        _state.list = _state.list.map(t => t.id == action.id? {...t, completed: !t.completed}:t )

        return _state
        break

    }
    return state;
}

export default reducer