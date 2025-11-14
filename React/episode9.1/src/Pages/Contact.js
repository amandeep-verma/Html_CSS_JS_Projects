import { ChangeProfile } from "../components/ChangeProfile"

export const Contact = (props) => {
    return (
        <div>
            <h1> THIS IS THE CONTACT PAGE for {props.username}</h1>
            {/*  We are passing the function to the grand child */}
            Change Profile: <ChangeProfile setUserName={props.setUserName} />
        </div>
    )
}