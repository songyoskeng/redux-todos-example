import { initialState as Todos} from '../config';
import {last} from 'lodash'

let nextTodoId = Todos.list[0]? last(Todos.list).id+1: 0


export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed:false,
    text
}) 

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter : filter || VisibilityFilters.SHOW_ALL
})