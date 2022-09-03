
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { Loginpostdata } from "../../redux/login/loginaction";





import axios from "axios"
import { useEffect } from "react";



function Login()
{

    let nav = useNavigate();

    let dispatch = useDispatch();
    let selector = useSelector(state=>state);
    let isAuth = useSelector(state=>state.loginreducer.isAuth);
    let isloading = useSelector(state=>state.loginreducer.isloading);
    let username = useSelector(state=>state.loginreducer.userdetails?.user?.firstname);
    
    console.log(username,"isloading")
    
    
    let [loginobj,setloginobj] = useState({});

    const Loginhandler =(event)=>{
        
        let {name,value} = event.target;

        setloginobj({...loginobj,[name]:value})

    }

    const Submithandler =()=>{

        
       
         dispatch(Loginpostdata(loginobj))
    }

    useEffect(()=>{

 
      
    },[])
    useEffect(()=>{

        if(isAuth)
        {
            nav("/")
        }

    },[isAuth])

     


    return (
        <div>
     <div w={{base:"300px",md:"500px"}} m="30px auto"  gap={"20px"}>
    
        <label>Email</label>
        <input placeholder='Email' name="email"  onChange={Loginhandler} />
      
        <label>Password</label>
        <input placeholder='password' name="password"  onChange={Loginhandler}/>
     
      <div>
        if you are  new user? click here to <p><Link to="/signup">Register</Link></p> 
      </div>
      <button bg={"teal"} color="white" onClick={Submithandler}>Submit</button>
      
      
      </div>
       
     
      </div>)
} 

export default Login