import {useState} from 'react'

function TodoInput({ TaskAdder, ClearAll}) {
    const [inputText, setInputText] = useState('')
    function handleChange(e) {
        setInputText(e.target.value)
    }
    function AddTask() {
        TaskAdder(inputText)
        setInputText('')
    }
    return (
        <div id='input-div'>
            <input type="text" value={inputText} onChange={handleChange}/>
            <button type='submit' onClick={AddTask}>Add Task</button>
            <button onClick={ClearAll}>Clear All</button>
        </div>
    )
}

export default TodoInput