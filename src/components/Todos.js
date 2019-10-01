import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
class Todos extends React.Component{
    render() {
        return this.props.todos.map((eachTodo)=>{
            return (
                <div id = "border">
                    <TodoItem key = {eachTodo.id} title={eachTodo.title}/>
                </div>
            )
        }
        )
    }
}
//PropTypes its good practice
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;