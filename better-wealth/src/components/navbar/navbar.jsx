import { Component } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import "./navbar.css"


function Navbar(){

   

 
    let isAuth = useSelector(state=>state.loginreducer.isAuth);
    

        return (<div className="navbar_total">
            

            <div ><Link to="/">Home</Link></div>
               
               <div>{isAuth?<Link to="/logout">logout</Link>:<Link to="/login">login</Link>}</div>
            
               
        </div>)
    
}

export default Navbar