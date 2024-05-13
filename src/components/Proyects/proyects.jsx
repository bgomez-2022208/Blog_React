
import React from 'react';
import proyec2 from "../../assets/c1.png";
import proyec3 from "../../assets/c2.png";
import proyec4 from "../../assets/c3.png";
import proyec5 from "../../assets/c5.png";
import proyec6 from "../../assets/c4.png";
import proyec7 from "../../assets/c6.png";


import "../Proyects/proyects.css";




export const Proyect = () => {
    return (
        <>
            <div class="container">
                <div class="titless">Taller</div>


                <div class="box">
                    <span color="white"><img className="imagenes" src={proyec7} alt="icon" /><a href="https://cetkinal-my.sharepoint.com/:f:/g/personal/bgomez-2022208_kinal_edu_gt/EgGOwLSBRSRDhqGOPli1lHwB4Npw4n4QtH8cs9q0Q23DnA?e=wNUM0V">Hacker Rank</a></span>
                </div>

                <div class="box">
                    <span color="white"><img className="imagenes" src={proyec2} alt="icon" /><a href="https://github.com/bgomez-2022208/GetorDeOpiniones.git">Gestor de opiniones</a></span>
                </div>

                <div class="box">
                    <span color="white"><img className="imagenes" src={proyec3} alt="icon" /><a href="https://github.com/bgomez-2022208/Laboratorio-personal.git">Laboratorio-personal</a></span>
                </div>

                <div class="titless">Practica Supervisada</div>
                <div class="box">
                    <span color="white"><img className="imagenes" src={proyec4} alt="icon" /><a href="https://github.com/bgomez-2022208/Agenda_Web.git">Agenda Web</a></span>
                </div>

                <div class="box">
                    <span color="white"><img className="imagenes" src={proyec5} alt="icon" /><a href="https://github.com/bgomez-2022208/proyectoAcademico.git">Proyecto Academico</a></span>
                </div>

                <div class="box">
                    <span color="white"><img className="imagenes" src={proyec6} alt="icon" /><a href="https://github.com/bgomez-2022208/Gestor_Empresas.git">Gestor de Empresas</a></span>
                </div>
            </div>


        </>
    );
};

