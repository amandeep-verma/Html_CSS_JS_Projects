// We have to import useContext from react and AppContext as we defines in the mainApp
import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    // This is how we can get states from AppContext
    const { userName } = useContext(AppContext)
    return <h1> THIS IS THE HOME PAGE for {userName}</h1>
} 