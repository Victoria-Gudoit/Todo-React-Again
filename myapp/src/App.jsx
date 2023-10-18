import React from "react";
import { FILTER_STATUSES, filterOptions } from "./constants";
import { Filtercheck } from "./filtercheck";
import { CheckboxGroup } from "./CheckboxGroup";
import {v4 as uuidv4} from "uuid"

const filterTasks = (filter, task) => {
  if(filter === FILTER_STATUSES.ALL) {
    return true
  }

  if(filter === FILTER_STATUSES.DONE) {
    return task.isDone
  }

  return !task.isDone
}

export class App extends React.Component {
  state = {
    tasks: [
      { id: 1, title: "замедлиться", isDone: false },
    { id: 2, title: "жить", isDone: true },
    ],
    filter: FILTER_STATUSES.ALL,
    taskInput: '',
  } 

  changeFilterHandler = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteTaskHandler = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(({id: taskId}) => taskId !== id)
    }))
  }

  toggleChangeHandler = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if(task.id !== id) {
          return  task
        } 
        return {...task, isDone: !task.isDone}
      })
    }))
  }

  inputChangeHandler = (event) => {
    this.setState({taskInput: event.target.value})
  }

  addTaskHandler = () => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, {id: uuidv4(), title: prevState.taskInput, isDone: false}],
      taskInput: ''
    }))
  }
  
render() {
  const {tasks, filter, taskInput} = this.state
  return (
    <div className="App">
      <div>
        <input value={taskInput} onChange={this.inputChangeHandler} type="text" />
        <button onClick={() => this.addTaskHandler()}>+</button>
      </div>
      <div>
      <CheckboxGroup options={filterOptions} value={filter} onChange={this.changeFilterHandler} />
      </div>
      <ul>
        {tasks.filter((task) => filterTasks(filter, task)).map(({id, isDone, title}) => (
<li key={id}>
  <input onChange={() => this.toggleChangeHandler(id)} type="checkbox"  checked={isDone}/>
  <label>{title}</label>
  {isDone && <button onClick={() => this.deleteTaskHandler(id)}>x</button>}
</li>
        ))}
      </ul>

    </div>
  );
}
  
}



