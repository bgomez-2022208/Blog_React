
import {useState, useEfect} from "react";
import { Navbar } from "../components/NavBar";

export const HomePage = () => {

    const [showAddTask] = useState(false)

    return(
        <div className="homepage-container">
            {!showAddTask && (
                <Navbar /> 
            )}
        </div>
    )
}