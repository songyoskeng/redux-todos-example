import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, VisibilityFilters } from '../actions';

const getVisibleTodo = (todos, filter) => {
    switch(filter){
        case VisibilityFilters.SHOW_ACTIVE : 
            return todos.filter(t => !t.completed)
        case VisibilityFilters.SHOW_COMPLETED : 
            return todos.filter(t => t.completed)
        default: return todos
    }
}

let mapStateToProps = (state) => ({todos: getVisibleTodo(state.todos.list, state.visibilityFilter) })

let mapDispatchToProps = (dispatch) => ({
    toggleTodo : (id) => dispatch(toggleTodo(id)),
    deleteTodo : (id) => dispatch(deleteTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList) 