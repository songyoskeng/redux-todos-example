import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';

class VisibleTodoList extends Component {
    render(){  
        return (
            <div>
                <TodoList todos={this.props.todos}/>
            </div>
        )
    }
}

let mapStateToProps = ({todos}) => {
    return {
        todos 
    }
}
export default connect(mapStateToProps)(VisibleTodoList) 