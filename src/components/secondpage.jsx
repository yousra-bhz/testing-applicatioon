import React from 'react';
import './../App.css';
import image1 from '../assets/profile.jpg';
import image2 from '../assets/download-2-fill.svg';

function Second(){
const Download = () => {
    window.location.href = 'https://timbaker.me/';
}

    return(
        <div className='w-full bg-slate-950 py-40 ' id='about'>
            <div className=' flex flex-row w-60   mx-auto  strong text-white'>
                <img src={image1} alt='it is me'  className='profile '  />
                <div className='w-3/5 ml-96 '>
                    <h3 className='text-2xl font-bold mb-6 '>About Me</h3>
                    
                    <p> Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
                    <h3 className='text-2xl font-bold  my-6'>Contact Details</h3>
                   
                    <p >Nordic-Giant Project <br></br>555-555-5555<br></br>youremailhere@gmail.com</p>
                    <button className='bg-gray-900  my-6 text-white py-4 hover:bg-pink-600 relative w-3/5' onClick={Download}>
          <img src={image2} alt='book'  className=' absolute koko'/>
          <h3 className='font-bold text-xl '>Download Resume</h3>
          </button>
                </div>

               
            </div>
   
        </div>
    )
}

export default Second;