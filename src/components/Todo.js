import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends React.Component{
  constructor(props){
      super(props);
  }
    render(){
        console.log("Todo props: ", this.props)
        return (
            <div className="todo">
                <TodoList 
                toDoList={this.props.toDoList}
                onClick={() => this.props.onClick}
                />
                <TodoForm 
                clearCompleted={() => this.props.clearCompleted()}
                addTodo={() => this.props.addTodo}
                onChange={() => {this.props.onChange()}}
                onSubmit={() => this.props.onSubmit()}
                />
            </div>
        )
    }
}

/*
import React from 'react';

const Todo = props => {
    console.log('Todo props:', props);
    return(
        <div className={`task${props.completed ? '-completed' : ''}`}
            onClick={(() => props.toggleTask(props.id))}
        >
            {props.task}
        </div>
    )
}

export default Todo; 
*/
