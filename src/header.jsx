import Logo from './assets/Logo_vector.svg'
import './header.css'

function Header() {
    return(
        <div id='header'>
            <img src={Logo} alt="" />
            <h1>Todo List App</h1>
        </div>
    )
}

export default Header