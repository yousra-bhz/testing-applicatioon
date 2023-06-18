import './../App.css';
import { useState } from 'react';

function NavBar() {
    /*document.addEventListener('scroll', () =>{
        const header = document.querySelector('header');
        if(window.scrollY > 0) {
         header.classList.add('scrolled');
        }
        else if (window.scrollY ===  0){
         header.classList.remove('scrolled');
        }
    }
    )*/
    const  [navbar , setNavbar] = useState(false);
    const ChangeColor = () => {
        if (window.scrollY > 80) {
            setNavbar(true);
        }
            else{
               setNavbar(false);
            }
        }
        console.log(window.scrollY);
               window.addEventListener('scroll',ChangeColor);
    return (
        
            <header className={navbar ? 'header scrolled': 'header'} >
            <ul className="  flex flex-row w-80 py-2 mx-auto justify-center items-center gap-x-8">
                <li><a href="#home" className="text-orange-600 font-semibold hover:text-green-600">Home</a></li>
                <li><a href="#about" className="text-white font-semibold">About</a></li>
                <li><a href="#resume" className="text-white font-semibold">Resume</a></li>
                <li><a href="#works" className="text-white font-semibold">Works</a></li>
                <li><a href="#contact" className="text-white font-semibold">Contact</a></li>
            </ul>
        </header>
    );
}

export default NavBar;
