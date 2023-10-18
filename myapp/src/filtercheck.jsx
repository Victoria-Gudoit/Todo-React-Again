import React, {useState} from 'react'
export const FILTER_STATUSES = {
  ALL: "all",
  DONE: "isDone",
  TODO: "todo",
};

export const Filtercheck = () => {


const [tasks, setTasks] = useState([{id: 1, title: 'kddlk', isDone: true},
{id: 2, title: 'gfgh', isDone: false}
])

const [filter, setFilter] = useState(FILTER_STATUSES.ALL)

const [title, setTitle] = useState('')



const changeStatus = (id) => {
let changesTasks = tasks.find(task => task.id === id)
if(changesTasks) {
  changesTasks.isDone = !changesTasks.isDone
  setTasks([...tasks])
}}

let filteredTasks = tasks;

if(filter === FILTER_STATUSES.DONE) {
  filteredTasks = tasks.filter(t => t.isDone)
}
if(filter === FILTER_STATUSES.TODO) {
  filteredTasks = tasks.filter(t => !t.isDone)
}

const changeFilter = (value) => {
  // let ftasks = tasks.filter(t => t.isDone === value)
  setFilter(value)
}

const removeTasks = (id) => {
  const removedTasks = tasks.filter(t => t.id !== id)
  setTasks([...removedTasks])

}

const addTask = (title) => {
  const newTask = {id: 3, title: title, isDone: false}
  console.log(newTask);
  let a = [newTask, ...tasks]
  setTasks(a)

}
  console.log(title);
const onChangeHandler = (e) => {
  setTitle(e.target.value);
};

  return (
    <div>
      <div>
        <input value={title} onChange={({currentTarget}) => setTitle(currentTarget.value)} type="text" />
        <button onClick={() => addTask(title)}>+</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li>
              <input onChange={() => changeStatus(task.id)} type="checkbox" checked={task.isDone} />
         {task.title} <button onClick={() => removeTasks(task.id)}>x</button></li>
          
       
        ))}
        
      </ul>
      <div>
 <button onClick={() => changeFilter(FILTER_STATUSES.ALL)}>Всё</button>
        <button onClick={() => changeFilter(FILTER_STATUSES.DONE)}>Сделать</button>
        <button onClick={() => changeFilter(FILTER_STATUSES.TODO)}>Сделано</button>  
      </div>
   
    </div>
  )
}


