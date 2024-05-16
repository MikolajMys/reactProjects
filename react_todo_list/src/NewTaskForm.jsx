import { useState } from "react"

export function NewTaskForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        
        onSubmit(newItem)

        setNewItem("")
      }

    return (
      <form onSubmit={handleSubmit} className="new-item-form">
        <div>
          {/* <label htmlFor="item">New Task</label> */}
          <input 
            className="todo-input"
            placeholder="What are your plans for today?"
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item" 
          />
          <button className="btn">Add Task</button>
        </div>
        
      </form>
    )
}