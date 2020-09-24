import React from 'react';

export default class TodoForm extends React.Component{
  constructor(props){
      super(props);
  }
    render(){
        console.log("TodoForm props", this.props)
        console.log("TodoForm onChange prop: ", this.props.onChange)
        console.log("TodoForm onSubmit props: ", this.props.onSubmit)
        return(
            <div>
            <form onSubmit={this.props.onSubmit}>
                <input 
                type='text' 
                placeholder={'New Todo'} 
                value={this.onChange}
                onChange={this.onChange}
                />
                <button 
                type='button'
                value='Add Todo'
                onSubmit={this.onSubmit}
                >Add Todo </button>
                <button
                type='reset'
                value={this.clearCompleted}
                onClick={this.props.onSubmit}
                >Clear Completed</button>
            </form>
            </div>
        )
    }
}

/*
class TodoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            task: []
        };
    };
// Set the value of task w/ e.target.value
    changeHandler = e => {
        this.setState({ task: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({ task: '' });
        this.props.addTask(e, this.state.task)
    }

    render() {
        console.log('ToDo form props:', this.props);
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    placeholder='Task'
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.changeHandler}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm; 
*/