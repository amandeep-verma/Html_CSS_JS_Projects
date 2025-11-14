export const User = (props) => {
    return (
        <div>
            {props.allusers.map((value, key) => {
                return <h1 key={key}>{value.name} {value.age} {key}</h1>;
            })}

        </div>
    )
}