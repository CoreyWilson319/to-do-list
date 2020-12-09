import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  clearList = (e) => {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange = (e) => {
    this.setState({
      newItem: String(e.target.value)
  })
  }
  addItem = (e) => {
    console.log(this.state.toDoItemArray)
    let addingNewItem = this.state.toDoItemArray.push(this.state.newItem)
    this.setState({
      toDoItemArray: addingNewItem
    })
  }

  render() {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Clear</button>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList