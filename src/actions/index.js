import { initialState } from '../config';
let nextTodoId = initialState.todos[0]? initialState.todos[0].id: 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
}) 

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})