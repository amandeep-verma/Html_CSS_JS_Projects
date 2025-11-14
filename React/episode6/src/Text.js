// useEffect is another hook
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    // useEffect is allowing you to execute an action when component mounts and unmounts
    // You will see this in console.
    // These logs appear twice - to mount, unmount and mount it again - to ensure you did it right.
    useEffect(() => {
        // this action triggers when component is mounted
        console.log("COMPONENT MOUNTED");

        // the action in return function execute when component is unmounted
        return () => {
            console.log("COMPONENT UNMOUNTED");
        }

        // you have an option of passing array argument to useEffect to specify what changes triggers the useEffect. If empty it only changes when component is mounted
    }, []);



    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value)
            }}>
            </input>

            <h1>{text}</h1>
        </div>
    )
}