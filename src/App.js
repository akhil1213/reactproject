import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component{
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
            <Todos todos={this.state.todos}/>
        {/*    passing the todos array to our todos component as a prop. this is like a property.*/}
        </div>
    );
  }
}

export default App;
