import { useContext } from "react"
import { AppContext } from "../App"


export const Menu = () => {
    const { userName } = useContext(AppContext)
    return <h1> THIS IS THE MENU PAGE for {userName}</h1>
}