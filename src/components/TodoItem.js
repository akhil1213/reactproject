import React from 'react';
import PropTypes from 'prop-types';
class TodoItem extends React.Component{
    render() {
        return <div>{this.props.title}</div>
    }
}

TodoItem.propTypes = {
    title : PropTypes.string.isRequired
}
export default TodoItem;