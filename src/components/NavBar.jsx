import React from 'react';
import Logo from "../assets/Logo2.jpg";  
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigateAboutMe = () => {
        navigate('/my');
    };

    const handleNavigateToWorksPage = () => {
        navigate('/works');
    };

    const handleNavigateToAddComment = () => {
        navigate('/add');
    };

    return (
        <div className="navbar"> 
            <img src={Logo} alt="Logo" className=".logo" />  
            <button className='nav-button' onClick={handleNavigateToAddComment}>Browse</button>
            <button className='nav-button' onClick={handleNavigateAboutMe}>More about me</button>
            <button className='nav-button' onClick={handleNavigateToWorksPage}>My works</button>
        </div>
    );
}

export default Navbar;