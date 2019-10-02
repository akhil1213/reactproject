import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header>
            <h1>Todo list</h1>
            <Link to="/Todos">Todos</Link>
            <Link to="/About">About</Link>
        </header>
    )
}
export default Header;