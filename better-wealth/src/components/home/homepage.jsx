
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Loginpostdata } from "../../redux/login/loginaction";

function Home()
{
     
   


    let userdetails = useSelector(state=>state.loginreducer.userdetails?.user );
    

    return (<div >
           
           <h1>Hi welocme
          </h1>

           


        




    </div>)
}

export default Home