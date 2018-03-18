import React, { Component } from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import VisibilityFilterBar from './containers/VisibilityFilterBar';

class App extends Component {
  render() {
    return (
      <div>
        <br/>
        <VisibilityFilterBar/>
        <br/>
        <VisibleTodoList/>
        <AddTodo/>
       
      </div>
    );
  }
}

export default App;
