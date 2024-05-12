
import {useState, useEfect} from "react";
import { Navbar } from "../components/NavBar";
import "../pages/HomePage.css"


export const HomePage = () => {

    const [showAddTask] = useState(false)

    return(
        <div className="body">
            {!showAddTask && (
                <Navbar /> 
            )}
        </div>
    )
}