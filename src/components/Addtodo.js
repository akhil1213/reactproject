import React from 'react';
import PropTypes from 'prop-types';
class Addtodo extends React.Component{
    state = {
        value:''
    }
    textChange = (e) => this.setState({[e.target.name]:e.target.value})
    onSubmit = (e) => {
        e.preventDefault()//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL
        this.props.addTodo(this.state.value)
        this.setState({value:''})
    }

    render() {
        return (
            <div>
               <form onSubmit={this.onSubmit}>
                   <input  type = "text" placeholder = "addtodo.." name = "value" value={this.state.value} onChange={this.textChange}></input>
                   <input type ="submit" value="Submit"></input>
               </form>
            </div>
        )
    }
}


export default Addtodo;
