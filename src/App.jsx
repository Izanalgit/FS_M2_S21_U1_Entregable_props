import './App.css'
import Tasks from './components/Task';
import AddTaskForm from './components/AddTaskForm';

import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (textTask) =>{
    //Esto de poner la id por el length... es más peligroso que un mono con escopeta jajaja 
    const newID = tasks.length + 1;
    const newTask = {
      id:newID,
      text: textTask,
      completed: false
    }
    setTasks([...tasks,newTask])
  }

  const deleteTask = (taskID) => {
    setTasks(tasks.filter(task => task.id !== taskID));
  }

  const updateTask = (taskID) => {
    let tasksUpd = [...tasks];
    tasksUpd.forEach((task)=>{
      if (task.id == taskID){
        task.completed=(task.completed)
          ?false
          :true
      }
    })
    setTasks(tasksUpd);
  }

  let tasksProps = {
    tasks:tasks,
    deleteTask,
    updateTask
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask}/>
      <Tasks props={tasksProps} />
    </>
  );
};

export default App;
