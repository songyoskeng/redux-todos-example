import {initialState} from '../config'

let reducer = (state = initialState, action) => {

    let _state = Object.assign({},state);
    switch(action.type){
        case 'ADD_TODO' : 
        _state.todos = [...state.todos, {id:action.id, text: action.text, completed: false}]
        return _state
        break

        case 'TOGGLE_TODO' :
        _state.todos = _state.todos.map(t => t.id == action.id? {...t, completed: !t.completed}:t )

        return _state

        break
    }
    return state;
}

export default reducer