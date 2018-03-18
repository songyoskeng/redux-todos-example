import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
    submitTodo = (e) => {
        e.preventDefault()
        if(!this.input.value.trim())
            return
        console.log(this.input.value);

        this.props.addTodo(this.input.value)
        this.input.value = ''
    }
    render(){  
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                    <input ref = {node => this.input = node}/>
                    <button type="submit" style={{marginLeft:5}}>add</button>
                </form>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
}


export default connect(null, mapDispatchToProps)(AddTodo) 