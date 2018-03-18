import React from 'react'

const Todo = ({text, toggleTodo, completed}) => (
    <li onClick={toggleTodo} style={{textDecoration:completed? 'line-through':'none', cursor:'pointer'}}>
        {text}
    </li>
)

export default Todo;