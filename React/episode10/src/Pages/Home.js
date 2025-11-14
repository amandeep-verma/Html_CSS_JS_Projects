import { useQuery } from "@tanstack/react-query"
import Axios from "axios";

export const Home = () => {
    // useQuery takes a object argument,In the object we have 2 things - queryKey and queryFn
    // We get the keys here by destructering from the resulatant of useQuery function. These are optional
    const { data: catData, isLoading, error, refetch } = useQuery({
        queryKey: ["cat"], // unique identifier for the query
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => { return res.data }),
    });

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error fetching data</h1>;

    return <div> 
        <h1> THIS IS THE HOME PAGE <p>{catData?.fact}</p></h1>
        <button onClick={refetch}>Refetch</button>

    </div>

}