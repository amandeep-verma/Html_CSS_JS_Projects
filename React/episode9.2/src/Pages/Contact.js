// We have to import useContext from react and AppContext as we defines in the mainApp
import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

export const Contact = () => {
    // This is how we can get states from AppContext
    const { userName, setUserName } = useContext(AppContext)
    return (
        <div>
            <h1> THIS IS THE CONTACT PAGE for {userName}</h1>
            {/*  We are passing the function to the grand child */}
            Change Profile: <ChangeProfile setUserName={setUserName} />
        </div>
    )
}