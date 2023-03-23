// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, DeleteList} = props
  const {title, id} = todoList
  const onDelete = () => {
    DeleteList(id)
  }

  return (
    <li className="list-container">
      <p className="list-content">{title}</p>
      <button className="dlt-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
