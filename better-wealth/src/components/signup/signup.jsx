
import {useDispatch,useSelector} from "react-redux";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchsignupdata } from "../../redux/signup/signupaction";



function Signup()
{

   
   

  
   
    let nav = useNavigate();
   

         


    let dispatch = useDispatch(); 


     let [signinobj,setsigninobj]  =useState({});

     const Signuphandler =(res)=>{

        let {name,value} = res;

        setsigninobj({...signinobj,[name]:value})


     }

     const PostSignup =()=>{
        
        dispatch(fetchsignupdata(signinobj))
        
     }
     

    return (<div >
          
          
          
        
                <div   >

                <h1 >Sign Up</h1>
          

            <div   >

            <input onChange={(e)=>{Signuphandler(e.target)}} name="name" type={"p"}  placeholder='Name' />
        
            <input onChange={(e)=>{Signuphandler(e.target)}} name="email"  type={"email"}    placeholder='Email id' />
            <input onChange={(e)=>{Signuphandler(e.target)}} name="password"   type={"password"}   placeholder='Password' />
             
            </div>

            

            <button onClick={PostSignup} >PROCEED</button>

            </div>

          


          
         
    </div>)
}

export default Signup