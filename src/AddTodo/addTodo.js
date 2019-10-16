import React from 'react';
import './style.css';

class AddTodo extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  render() {
    return(
      <div className="TodoContainer">
        <form onSubmit={(e) => this.submitTodo(e)}>
        <input id="addTodoInput" onChange={(e) => this.updateInput(e)} type="text" required></input>
        <button class="button" type="text">Add To Do</button>
        </form>
      </div>
    )
  }

  updateInput = (e) => {
    this.setState({ todo: e.target.value });
  }

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
    document.getElementById("addTodoInput").value = "";
  }

}

export default AddTodo;