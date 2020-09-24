import React from "react";
import Todo from './components/Todo';


console.log("Hello from React: ", React)

const date = new Date(Date.now())//Date.UTC(2012, 11, 20, 3, 0, 0)
const idDate = date.toLocaleString('en-US')

class App extends React.Component {
  constructor(props) {
    super(props);
    // state here
    this.state = {
      toDoList: [
        {
          todo: "Todos",
          id: idDate,
          completed: false,
        },
      ],
    };
  }

  // and handlers here
  addToDo(e) {
    this.addToDo = this.addToDo.bind(this);
    console.log("event: ", e)
    console.log("\ntarget: ", e.target)
    
    e.preventDefault();
    this.setState([...this.state.toDoList, {[this.state.toDoList]: e.target.value}])
  }

  clearCompleted(e) {
    this.clearCompleted = this.clearCompleted.bind(this);
    console.log("event: ", e)
    console.log("\ntarget: ", e.target)
    
    e.preventDefault()
    this.setState({[e.target.name]: ''})
  }

  onClick(e) {
    this.onClick = this.onClick.bind(this);
    console.log("event: ", e)
    console.log("\ntarget: ", e.target)
    
    e.preventDefault();
    this.setState({
      ...this.state.toDoList, 
      [this.state.toDoList.completed]: !e.target.value
    })
  }

  onChange(e) {
    this.onChange = this.onChange.bind(this);
    console.log("event: ", e)
    console.log("\ntarget: ", e.target)
    
    e.preventDefault();
    this.setState({[this.state.toDoList.todo]: e.target.value})
  }
  
  onSubmit(e) {
    this.onSubmit = this.onSubmit.bind(this);
    console.log("event: ", e)
    console.log("\ntarget: ", e.target)
    
    this.setState([...this.state.toDoList, {[e.target.name]: e.target.value}])
  }

  render() {
    console.log("App props: ", this.props)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo
        toDoList={this.state.toDoList} 
        onClick={() => this.onClick()}
        addToDo={() => this.addToDo()}
        clearCompleted={() => this.clearCompleted()}
        onChange={() => {this.onChange()}}
        onSubmit={() => {this.onSubmit()}}
        />
      </div>
    );
  }
}

export default App;

/*
import React from 'react';

// Components

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
      task: 'Start React Project',
      id: 0001,
      id: 4564654,
      complete: false
  },
  {
      task: 'Study Advanced React',
      id: 0002,
      id: 45646548,
      complete: false
  }
];
*/

/*
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      item: item
      tasks: list
    };
  }
*/

/*
  // Action to take to add new task to list... needs to be passed to component
  addTask = (e, task) => {
  addTask = (e, taskName) => {
    e.preventDefault();
    const newTask = {
      task: task,
      task: taskName,
      id: Date.now(), //generates unique ID,
      completed: false, //initially set to false 
    };
    this.setState({
      task: [...this.state.task, newTask]
      tasks: [...this.state.tasks, newTask]
    })
  }
*/

/*
class App extends React.Component {
    console.log('toggleTask taskId', taskId);
    this.setState({
      //Mapping over the task and checking to see if the IDs match, toggle completed
      task: this.state.task.map(task => {
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task, completed: !task.completed
            ...task,
            completed: !task.completed
          }
        }
        return task;
*/

/*
class App extends React.Component {
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      task: this.state.task.filter(task => !task.completed)
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm addTask={this.addTask} />
        <TodoList 
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
*/