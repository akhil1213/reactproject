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
                    <TodoItem key = {eachTodo.id} todo={eachTodo} deleted={this.props.deleted} checkboxClicked={this.props.checkboxClicked}/>
                </div>//we receive the prop from the todoitem class and we go up another level
            )
        }
        )
    }
}

//PropTypes its good practice
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    checkboxClicked: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
}
/*Why React PropTypes are important. Props are the mechanism React uses to let components communicate with each other. A parent component can pass it's child(ren) named prop values, which the child can then use in its internal logic.*/

export default Todos;
