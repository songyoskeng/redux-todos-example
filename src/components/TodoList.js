import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, toggleTodo, deleteTodo}) => (
    <ul>
        {todos.map(todo => <Todo key={todo.id} {...todo} deleteTodo={() => deleteTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)}/>)}

    </ul>
)

export default TodoList;