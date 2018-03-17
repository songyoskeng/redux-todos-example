import React, { Component } from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
      </div>
    );
  }
}

export default App;
