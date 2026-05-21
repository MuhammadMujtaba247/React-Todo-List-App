import { createRoot } from 'react-dom/client'
import Header from './header'
import TodoList from './todolist'
import './main.css'

function App() {
    return (
        <>
        <Header />
        <TodoList />
        </>
    )
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)