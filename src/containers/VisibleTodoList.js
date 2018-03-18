import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, VisibilityFilters } from '../actions';
import { createSelector } from 'reselect';

const getVisibleTodo = (todos, filter) => {
    switch(filter){
        case VisibilityFilters.SHOW_ACTIVE : 
            return todos.filter(t => !t.completed)
        case VisibilityFilters.SHOW_COMPLETED : 
            return todos.filter(t => t.completed)
        default: return todos
    }
}

const todoSelector = (state) => state.todos
const visibilityFilterSelector = (state) => state.visibilityFilter
const getVisibleTodoSelector = createSelector([todoSelector, visibilityFilterSelector],
    (todos, visibilityFilter) => getVisibleTodo(todos.list, visibilityFilter)
    //ลดปัญหาการเรียกโค้ดเดิมซ้ำๆ ในกรณีที่ state อื่นที่ไม่เกี่ยวข้องมีการเปลี่ยนแปลง
)

let mapStateToProps = (state) => ({
    // todos: getVisibleTodo(state.todos.list, state.visibilityFilter) //This is Selector เราสามารถ Cache ไว้ได้เพื่อ perfomance ที่ดี
    todos: getVisibleTodoSelector(state) 
})

let mapDispatchToProps = (dispatch) => ({
    toggleTodo : (id) => dispatch(toggleTodo(id)),
    deleteTodo : (id) => dispatch(deleteTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList) 