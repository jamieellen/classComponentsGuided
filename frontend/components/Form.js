import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addToDo(this.state.name)
    //COULD ALSO LOOK LIKE
    // const {addToDo} = this.props
    // addToDo(this.state.name)
    this.setState({
      ...this.state,
      name: ''
    })
  }

  onChange = evt => {
    const {value} = evt.target
    this.setState({
      ...this.state,
      name: value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {/* <button onClick={evt => addToDo('Write Letter')}> Add </button> */}
        <input type='text' value={this.state.name} onChange={this.onChange}></input>
        <input type='submit' ></input>
      </form>
    )
  }
}
