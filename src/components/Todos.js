import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
class Todos extends React.Component{
    checkboxClicked = () => {

    }
    render() {
        return this.props.todos.map((eachTodo)=>{
            return (
                <div id = "border">
                    <TodoItem key = {eachTodo.id} todo={eachTodo} checkboxClicked={this.props.checkboxClicked}/>
                </div>//we receive the prop from the todoitem class and we go up another level
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
