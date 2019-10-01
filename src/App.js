import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component{
  checkboxClicked = (id) => {
    this.state.todos[id-1].completed = !this.state.todos[id-1].completed;
    this.setState({todos:this.state.todos})
  }//after changing the todos array inside the state , the changes will not go into effect unless you call the setState function.
  /*delete to do below, i filter the array such that the array consists of
  all todo items where the todo id isnt equal to the id given from the bind parameter*/
  deleted = (id) =>{
      this.setState({todos: this.state.todos.filter(todo =>
          todo.id !== id
      )}
      )
  }

  state = {
    todos: [
      {
        id:1,
        title: 'Take out trash',
        completed: false
      },
      {
        id:2,
        title: 'Take outded trash',
        completed: false
      },
      {
        id:3,
        title: 'Eat dinner w wife',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.todos)
    return (

        <div className="App" id = "parentdiv">
            <Todos todos={this.state.todos} checkboxClicked={this.checkboxClicked} deleted={this.deleted}/>
        {/*    passing the todos array to our todos component as a prop. this is like a property.*/}
        </div>
    );
  }
}

export default App;
