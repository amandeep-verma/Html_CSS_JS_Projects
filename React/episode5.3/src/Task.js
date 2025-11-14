export const Task = (props) => {
    return (
        <div>
            {/* We are changing color based on taskCompleted value using ternary operator */}
            <h1 style={{ color: props.taskCompleted ? "green" : "black" }}>{props.name}</h1>
            <button onClick={() => props.markComplete(props.id)}>Complete Task</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}