import { useState } from 'react';
export const ChangeProfile = (props) => {
    const [newName, setNewName] = useState("")
    return (
        <div>
            {/*  Here we are using to set the name in the grand child component */}
            {/* Notice adding value={newName}, and setting it later to enpty string - allows us to to set the input to empty */}
            <input value={newName} onChange={(event) => setNewName(event.target.value)}></input>
            <button onClick={() => {
                if (newName.trim() === "") return;
                props.setUserName(newName)
                setNewName("")
            }}>Change</button>
        </div>
    )
}