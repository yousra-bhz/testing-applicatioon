import React  from "react";
import './App.css';
import Second from './components/secondpage';
import NavBar from './components/navbar';
import Bubbles from './components/bubeles';
import Resume from './components/Resume';
import Works from './components/works';
import Contact from "./components/contact";



function App(){
 
  return(
    <div>
      <NavBar /> 
      <Bubbles />
      <Second />
      <Resume />
      <Works />
      <Contact />
    </div>
    
  )
}

export default App;

