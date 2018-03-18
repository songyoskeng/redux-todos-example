import React from 'react'

const Todo = ({text, onClick, completed}) => (
    <li onClick={onClick} style={{textDecoration:completed? 'line-through':'none', cursor:'pointer'}}>{text}</li>
)

export default Todo;