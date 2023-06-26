import React from "react";
import uietlogo from '../images/UIET_logo.png'
import './Header.css'
import { Link } from "react-router-dom";

const  Header = () =>{
    return (
        <div class="top">
        <div class="name">
            <img src={uietlogo} class="uietlogo" />
            <div class="uniname">University Institute of Engineering and Technology</div>
            <div class="contact">
                <div class="contact_items">
                    <b>E-mail</b><br/>
                    directoruiet@pu.ac.in<br/>
                    <b>Call</b><br/>
                    8493056739
                </div>
            </div>
        </div>
        <div class="nav">
            
            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/"}>Courses</Link>
            <Link to={"/"}>Staff</Link>
            <Link to={"/Blog"}>Blog</Link>
            <Link to={"/Socials"}>Socials</Link>
        </div>
    </div> 
    )    
}



export default Header