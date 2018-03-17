const initialState  = {
    todos: []
}

let reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO' : 
        let todos = state.todos
        todos.push({id:action.id, text: action.text})

        return {...state, todos}
        
    }
    return state;
}

export default reducer