// Write your code here

import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {TodoList: initialTodosList}

  DeleteList = id => {
    const {TodoList} = this.state
    const filteredList = TodoList.filter(eachId => eachId.id !== id)

    this.setState({TodoList: filteredList})
  }

  render() {
    const {TodoList} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {TodoList.map(eachList => (
              <TodoItem
                key={eachList.id}
                todoList={eachList}
                DeleteList={this.DeleteList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
