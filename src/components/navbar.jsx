import React from "react";
import { Link } from "react-router";
import './navbar.css';


export function NavBar(){
    return(
        <>
        <h1 className = "Logo"><Link to = '/' style = {{textDecoration: 'none', color: "rgb(238, 238, 238)"}}>PCR</Link></h1>
        <nav className = "NavBar">
            
            
            <button className = "About"><Link to = '/about' style = {{ textDecoration: 'none', color: "black"}}>About</Link></button>
            <button className = "Home"><Link to = '/'style = {{ textDecoration: 'none', color: "black"}}>Home</Link></button>
            <button className = "Awards"><Link to = "/awards" style = {{textDecoration: 'none', color: "black"}}>Awards</Link></button>
            
            
            
            
                    
            
        </nav>
        </>
    );
};

