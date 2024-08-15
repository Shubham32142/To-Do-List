import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import Add from "./Addbtn";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(ToDoItem);
  const [filter, setFilter] = useState("All");

  function handleDelete(taskId) {
    setTasks(tasks.filter((task) => task.id != taskId));
  }

  const handleAdd = (newTaskDetails) => {
    const newTask = {
      id: tasks.length + 1,
      Task: newTaskDetails,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  function handleEdit(taskId) {
    const newDetails = prompt("edit your tasks");
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, Task: newDetails } : task
      )
    );
  }

  function handleCheck(event) {
    setFilter(event.target.value);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  function toggleTaskCompletion(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <div id="App">
        <Header />
        <Add onAdd={handleAdd} onCheck={handleCheck} />
        <div id="Item">
          {filteredTasks.map((item) => {
            return (
              <ToDoList
                key={item.id}
                taskId={item.id}
                onCheck={() => toggleTaskCompletion(item.id)}
                taskDetails={item.Task}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onAdd={handleAdd}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
