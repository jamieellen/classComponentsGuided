import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0;
let getId = () => ++id;

const initialToDos = [
  { id: getId(), name: 'Design & Complete 1st App', completed: false },
  { id: getId(), name: 'Play w/ Tigger & BudBud', completed: true },
  { id: getId(), name: 'Meditate', completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialToDos
  }

  addToDo = (name) => {
    this.setState ({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), completed: false, name })
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if( id ==  td.id ) return {...td, completed: !td.completed}
        return td;
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        <Form addToDo={this.addToDo}/>
      </div>
    )
  }
}
