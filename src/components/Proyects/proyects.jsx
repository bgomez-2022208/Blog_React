
import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import proyec2 from "../../assets/c1.png";
import proyec3 from "../../assets/c2.png";
import proyec4 from "../../assets/c3.png";
import proyec5 from "../../assets/c5.png";
import proyec6 from "../../assets/c4.png";
import proyec7 from "../../assets/c6.png";


import "../Proyects/proyects.css";




export const Proyect = () => {
    const navigate = useNavigate()
    const handleSpanClick = (text) => {
        navigate('/coments', { state: { initialText: text } });
    };


    return (
        <>
            <div className="card">
                <div className="titless">Taller


                    <div className="content">
                        <img src={proyec7} alt="icon" />
                        <span color="white"><a href="https://cetkinal-my.sharepoint.com/:f:/g/personal/bgomez-2022208_kinal_edu_gt/EgGOwLSBRSRDhqGOPli1lHwB4Npw4n4QtH8cs9q0Q23DnA?e=wNUM0V">Hacker Rank</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Veterinaria")}>
                        <p className='descripcion'>Ejercisios de programacion realizados en Hacker Rank.</p>
                        </button>
                    </div>

                    <div className="content">
                        <img src={proyec2} alt="icon" />
                        <span color="white"><a href="https://github.com/bgomez-2022208/GetorDeOpiniones.git">Gestor de opiniones</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Veterinaria")}>
                        <p className='descripcion'>Gestor de opiniones sobre publicaciones Api</p>
                        </button>
                    </div>

                    <div className="content">
                        <img className="imagenes" src={proyec3} alt="icon" />
                        <span color="white"><a href="https://github.com/bgomez-2022208/Laboratorio-personal.git">Laboratorio-personal</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Veterinaria")}>
                        <p className='descripcion'>Lista de contactos de programador en donde puedes administralos</p>
                        </button>
                    </div>
                </div>

                <div className="titless">Practica Supervisada
                    <div className="content">
                        <img className="imagenes" src={proyec4} alt="icon" />
                        <span color="white"><a href="https://github.com/bgomez-2022208/Agenda_Web.git">Agenda Web</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Veterinaria")}>
                        <p className='descripcion'>Agenda de listados en donde puedes almacenar eventos</p>
                        </button>
                    </div>

                    <div className="content">
                        <img className="imagenes" src={proyec5} alt="icon" />
                        <span color="white"><a href="https://github.com/bgomez-2022208/proyectoAcademico.git">Proyecto Academico</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Veterinaria")}>
                        <p className='descripcion'>Gestor de Escuela academica Api</p>
                        </button>
                    </div>

                    <div className="content">
                        <img className="imagenes" src={proyec6} alt="icon" />
                        <span color="white"><a href="https://github.com/bgomez-2022208/Gestor_Empresas.git">Gestor de Empresas</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Veterinaria")}>
                        <p className='descripcion'>Gestion ejecutiva para agregar empresas a un servicio</p>
                        </button>
                    </div>
                </div>

                <div className="titless">Tecnologia
                    <div className="content" >
                        <img className="imagenes" src={proyec4} alt="icon" />
                        <span color="white"><a href="https://github.com/bgomez-2022208/Laboratorio2.git">Veterinaria</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Veterinaria")}>
                            <p className='descripcion'>Api sobre el manejo de una veterianaria en la cual se podra adoptar</p>
                        </button>
                    </div>

                    <div class="content">
                        <img className="imagenes" src={proyec5} alt="icon" />
                        <span color="white"><a href="https://github.com/bgomez-2022208/Streaming-Frontend.git">Streaming</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Streaming")}>
                            <p className='descripcion'>Plataforma para realizar streaming de manera local</p>
                        </button>
                    </div>

                    <div class="content">
                        <img className="imagenes" src={proyec6} alt="icon" />
                        <span color="white"><a href="https://github.com/jgalicia2022203/Node-Task-Manager.git">Task Manager</a></span>
                        <button className='botones' onClick={() => handleSpanClick("Task-Manager")}>
                            <p className='descripcion'>Gestion de tareas con el CRUD completo trabajo en equipo</p>
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
};

