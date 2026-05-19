import './todolist.css'
import TodoInput from './todoInput'
import { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([])
    function AddTask(taskContent) {
        setTasks(prev => [...prev, taskContent])
    }
    function ClearTasks() {
        setTasks([])
    }
    function DeleteTask(task) {
        setTasks(prev => prev.filter(item => item !== task))
    }
    return (
        <div id='todo-list'>
            <TodoInput TaskAdder={AddTask} ClearAll={ClearTasks} />
            <hr />
            <div id='todo-display'>
                {tasks.map(task => <div className='todos' key={'todo-' + task}><h3>{task}</h3><button onClick={()=>{DeleteTask(task)}}>Delete</button></div>
                )}
            </div>
        </div>
    )
}

export default TodoList