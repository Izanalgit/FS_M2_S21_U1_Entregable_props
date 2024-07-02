function Tasks ({props}){
    const styleCompleted = (task) =>{
        return (
            task.completed
            ?{ textDecoration: 'line-through'}
            :{ textDecoration: 'none'}
        )
    }

    return (
        <>
            {props.tasks.map((task)=>(
                <p key={task.id}>
                    <span 
                        style={styleCompleted(task)}
                        onClick={()=>props.updateTask(task.id)}
                    >{task.text} </span>
                    <button onClick={()=>props.deleteTask(task.id)}>Eliminar</button>
                </p>
            ))}
        </>
    );

}

export default Tasks;