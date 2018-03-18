import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

let mapStateToProps = (state) => ({todos: state.todos.list})

let mapDispatchToProps = (dispatch) => ({
    toggleTodo : (id) => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList) 