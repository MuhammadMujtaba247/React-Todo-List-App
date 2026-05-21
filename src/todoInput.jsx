import {useState} from 'react'

function TodoInput({ TaskAdder, ClearAll}) {
    const [inputText, setInputText] = useState('')
    function handleChange(e) {
        setInputText(e.target.value)
    }
    function AddTask() {
        let taskKey = 'todo-' + inputText.replace(' ', '-')
        TaskAdder(inputText, taskKey)
        setInputText('')
    }
    return (
        <div id='input-div'>
            <input type="text" value={inputText} onChange={handleChange} placeholder='Enter Task'/>
            <button type='submit' onClick={AddTask} id='add-task-button'>Add Task</button>
            <button onClick={ClearAll} id="clear-all-button">Clear All</button>
        </div>
    )
}

export default TodoInput