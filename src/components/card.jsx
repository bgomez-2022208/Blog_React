// CardContainer.jsx
import React from 'react';
import Mongo from "../assets/mongodb.png";  
import Mysql from "../assets/v1.png";
import Java from "../assets/java.png";
import JS from "../assets/js1.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";

import "../estilos/card.css";




export const Card = () => {
    return (
        <>
         
        <div class="container">
        <h1 className="titles">Lenguajes:</h1>
        <div class="box" ><img className="imagenes" src={Mysql} alt="icon"/></div>
        <div class="box"><img className="imagenes" src={Mongo} alt="Mongo"/></div>
        <div class="box"><img className="imagenes" src={Java} alt="Java"/></div>

        <div class="box" ><img className="imagenes" src={JS} alt="icon"/></div>
        <div class="box"><img className="imagenes" src={HTML} alt="Mongo"/></div>
        <div class="box"><img className="imagenes" src={CSS} alt="Java"/></div>
        
    </div>
        
</>
    );
};

