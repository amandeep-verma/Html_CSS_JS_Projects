export const Task = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}