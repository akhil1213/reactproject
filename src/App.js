import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'
import About from './components/pages/About'
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
class App extends React.Component{
  addTodo = (message) =>{
     const todo = {id:this.state.todos.length+1,title:message,completed:false}
     this.state.todos.push(todo)
     this.setState({})
  }
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
    todos: []
  }
  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>
          this.setState({todos:res.data})
      )
  }

    //render is a lifecycle method
  render() {
    return (
        //Each page gets its own Route in the app.js file.
        <Router>
                <div className="App" id = "parentdiv">
                    <Route exact path = "/" component={Header}></Route>
                    <Route exact path = "/Todos" render={props => (
                        /*if you don't specify exact path then these routes get concatenated so
                         /about will include / and about path so both will show on the same page when you go
                         to the /About path*/
                        <React.Fragment>
                            <Addtodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} checkboxClicked={this.checkboxClicked} deleted={this.deleted}/>
                        </React.Fragment>
                    )}>
                    </Route>
                    {/*    passing the todos array to our todos component as a prop. this is like a property.*/}
                </div>
            <Route path = "/About" component={About}>
                <About/>
            </Route>
        </Router>


    );
  }
}

export default App;
