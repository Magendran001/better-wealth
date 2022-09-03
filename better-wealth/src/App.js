import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/homepage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />


      </Routes>



    </div>
  );
}

export default App;
