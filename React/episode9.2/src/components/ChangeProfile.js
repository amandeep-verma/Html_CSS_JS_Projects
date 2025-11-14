// We have to import useContext from react and AppContext as we defines in the mainApp
import { useState } from 'react';
import { useContext } from "react"
import { AppContext } from "../App"

export const ChangeProfile = () => {
    // This is how we can get states from AppContext
    const { setUserName } = useContext(AppContext)
    const [newName, setNewName] = useState("")
    return (
        <div>
            <input value={newName} onChange={(event) => setNewName(event.target.value)}></input>
            <button onClick={() => {
                if (newName.trim() === "") return;
                setUserName(newName)
                setNewName("")
            }}>Change</button>
        </div>
    )
}