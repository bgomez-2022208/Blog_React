import React from 'react';
import Logo from "../assets/Logo2.jpg";  
import { useNavigate } from "react-router-dom";
import "../pages/HomePage.css"

export const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigateAboutInicio = () => {
        navigate('/init');
    };
    const handleNavigateToContactame = () => {
        navigate('/lenguajes');
    };
    const handleNavigateToProyectos = () => {
        navigate('/proyec');
    };
    
    const handleNavigateToAddComment = () => {
        navigate('/coments');
    };

    return (
        <div className="navbar"> 
        <img src={Logo} alt="Logo" className="logo" /> 
        <div className='button-borders'>
             
            <button className='primary-button' onClick={handleNavigateAboutInicio}>Inicio</button>
        </div>

        <div className='button-borders'>
             
        <button className='primary-button' onClick={handleNavigateToContactame}>Lenguajes</button>
        </div>

        <div className='button-borders'>
             
        <button className='primary-button' onClick={handleNavigateToProyectos}>Proyectos</button>
        </div>

        <div className='button-borders'>
             
        <button className='primary-button' onClick={handleNavigateToAddComment}>Comentarios</button>
        </div>
           
            
            
            
        </div>
    );
}

export default Navbar;