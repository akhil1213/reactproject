import React from 'react';
import PropTypes from 'prop-types';
class TodoItem extends React.Component{
    //dynamic styling
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '1px #ccc dotted'
        }
    }
    // checkboxClicked = (e) => {
    //     this.props.todo.completed = !this.props.todo.completed;
    // }doesnt work
    /*each onChange function takes an event parameter. Whenever the todoitem checkbox is completed, we
    need to climb the ladder to our app.js file and change the state of that todo item completed to false,
                                                                              this is done below*/
    render() {
        const { id , title} = this.props.todo;//destruction so you pull out id and title from this.props.tod
        return (
            <div style={this.getStyle()}>
                <p id="title"><input type="checkbox" onChange={this.props.checkboxClicked.bind(this,id)}/>{title}</p>
            </div>
        )
    }
    //from here we call this.props.checkboxClicked and this prop is in the todos class.
    //checkboxClicked.bind(this,this.props.todo.id) bind passes the id of the todo item clicked alway to app.js
}

TodoItem.propTypes = {
    title : PropTypes.string.isRequired
}
export default TodoItem;