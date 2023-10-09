import React from "react";

function App() {
  const tasks = [
    { id: 1, title: "замедлиться", isDone: false },
    { id: 2, title: "жить", isDone: true },
  ];

  return (
    <div className="App">
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <div>
            <input type="checkbox" checked={task.isDone} />
            <li>{task.title}</li>
          </div>
        ))}
      </ul>
      <div>
        <button>Всё</button>
        <button>Сделать</button>
        <button>Сделано</button>
      </div>
    </div>
  );
}

export default App;
