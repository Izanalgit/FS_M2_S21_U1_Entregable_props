import { useState } from "react";

function AddTaskForm ({addTask}){
    const [newTask, setNewTask] = useState("");

        return (
            <>
                <input 
                    type="text" 
                    id="newTask" 
                    name="newTask"
                    onChange={(e)=>setNewTask(e.target.value)} 
                />
                <button onClick={()=>addTask(newTask)}>Agregar</button>
            </>
        );

}

export default AddTaskForm;