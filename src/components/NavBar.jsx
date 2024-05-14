import React from 'react';
import Logo from "../assets/Logo2.jpg";
import { useNavigate } from "react-router-dom";
import "../pages/HomePage.css"

export const Navbar = () => {
    const navigate = useNavigate();

    const handleInicio = () => {
        navigate('#init');
    };
    const handleLenguajes = () => {
        navigate('card');
    };
    const handleProyectos = () => {
        navigate('/proyec');

    };

    const handleNavigateToAddComment = () => {
        navigate('/coments');
    };

    return (
        <div className="navbar">
            <img src={Logo} alt="Logo" className="logo" />
            <div className='button-borders'>

                <button className='primary-button' onClick={handleInicio}>Inicio</button>


            </div>

            <div className='button-borders'>

                <button className='primary-button' onClick={handleLenguajes}>Lenguajes</button>
            </div>

            <div className='button-borders'>

                <button className='primary-button' onClick={handleProyectos}>Proyectos</button>
            </div>

            <div className='button-borders'>

                <button className='primary-button' onClick={handleNavigateToAddComment}>Comentarios</button>
            </div>




        </div>
    );
}

export default Navbar;