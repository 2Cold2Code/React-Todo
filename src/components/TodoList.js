// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    console.log("TodoList props: ", this.props);
    return this.props.toDoList.map((task) => {
      return (
        <div className='todo'
          key={task.id}
          onClick={this.onClick}
        >
          {task.todo}
        </div>
      );
    });
  }
}

/*
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log('TodoList props:', props)
    return(
        <div>
            {props.tasks.map(todo => {
                return(
                    <div>
                        <Todo task={todo.task} id={todo.id} completed={todo.completed} toggleTask={props.toggleTask} />
                    </div>
                )
            })}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList; 
*/