
import {useState, useEfect} from "react";
import { Navbar } from "../components/NavBar";
import {Content} from "../components/content"
import { Card } from "../components/card"
import "../pages/HomePage.css";


export const HomePage = () => {

    const [show] = useState(false)

    return(
        <div className="body">
            {!show && (
                <Navbar /> 
                
            )}
            {!show && (
                <Content /> 
                
            )}
            {!show && (
                <Card /> 
                
            )}
          
        </div>
    )
}