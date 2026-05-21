import './todolist.css'
import TodoInput from './todoInput'
import { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([])

    function AddTask(taskContent, taskKey) {
        let task = {
            key: taskKey,
            content: taskContent,
            done: false
        }
        setTasks(prev => [...prev, task])
    }

    function ClearTasks() {
        setTasks([])
    }

    function DeleteTask(taskKey) {
        setTasks(prev => prev.filter(item => item.key !== taskKey))
    }

    function EditTask(taskKey) {
        let taskToEdit = document.getElementById(taskKey).getElementsByTagName('p')[0]
        let previousTaskContent = taskToEdit.innerText
        taskToEdit.innerText = ''
        let editInput = document.createElement('input')
        editInput.setAttribute('value', previousTaskContent)
        let finalizeEditButton = document.createElement('button')
        finalizeEditButton.innerText = 'Submit'
        finalizeEditButton.addEventListener('click', () => { FinalizeEdit(taskKey, editInput.value) })
        taskToEdit.append(editInput, finalizeEditButton)
    }

    function FinalizeEdit(taskKey, newTaskContent) {
        let taskToChange = tasks.find(task => task.key === taskKey)
        taskToChange.content = newTaskContent
        taskToChange.key = 'todo-' + newTaskContent.replace(' ', '-')
        let taskToEdit = document.getElementById(taskKey).getElementsByTagName('p')[0]
        taskToEdit.innerHTML = newTaskContent
        let taskToEditDiv = document.getElementById(taskKey)
        taskToEditDiv.setAttribute('key', taskToChange.key)
        taskToEditDiv.setAttribute('id', taskToChange.key)
    }

    function TaskDone(taskKey) {
        let taskToTick = tasks.find(task => task.key === taskKey)
        taskToTick.done = !taskToTick.done
        let taskToEditDisplay = document.getElementById(taskKey)
        if (taskToTick.done) {
            taskToEditDisplay.getElementsByTagName('p')[0].setAttribute("style", "text-decoration: line-through; opacity: 0.5;")
            taskToEditDisplay.getElementsByTagName('button')[0].setAttribute('class', 'checked-check-buttons')
        } else {
            taskToEditDisplay.getElementsByTagName('p')[0].setAttribute("style", " ")
            taskToEditDisplay.getElementsByTagName('button')[0].setAttribute('class', 'check-buttons')
        }
    }
    return (
        <div id='todo-list'>
            <TodoInput TaskAdder={AddTask} ClearAll={ClearTasks} />
            <hr />
            <div id='todo-display'>
                {tasks.map(task =>
                    <div className='task' key={task.key} id={task.key}>
                        <button id={task.key + '-check-button'} className={task.done ? 'checked-check-buttons' : 'check-buttons'} onClick={() => { TaskDone(task.key) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg></button>
                        <p>{task.content}</p>
                        <div>
                            <button id={task.key + '-edit-button'} onClick={() => { EditTask(task.key) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                </svg></button>
                            <button onClick={() => { DeleteTask(task.key) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                </svg></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList