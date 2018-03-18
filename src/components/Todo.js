import React from 'react'

const Todo = ({text, toggleTodo, completed, deleteTodo}) => (
    <li style={{display:'flex'}}>
        <span  onClick={toggleTodo} style={{textDecoration:completed? 'line-through':'none', cursor:'pointer',flex:1}}>
            {text}
        </span>
        <b onClick={deleteTodo} style={{flex:2,cursor:'pointer'}}>x</b>
    </li>
)

export default Todo;