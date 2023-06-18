import React from 'react';
import './../App.css';
import image1 from '../assets/one-120.svg';
import image3 from '../assets/one-240.svg';
import image4 from '../assets/two-36.svg';
import image5 from '../assets/two-120.svg';
import image6 from '../assets/two-240.svg';
import image7 from '../assets/three-36.svg';
import image8 from '../assets/three-240.svg';
import image9 from '../assets/checkbox-blank-circle-fill.svg';
import image10 from '../assets/book-fill.svg';
import image11 from '../assets/github-fill.svg';
function BuBles() {
  const handleButtonClick = () => {
    window.location.href = 'https://github.com/nordicgiant2/react-nice-resume';
  };

    const handleButtonClick1 = () => {
      window.location.href = 'https://github.com/lindelof';
    };
  return (
    <div className= 'big' id='home'>
      <div className='flex flex-row h-max goro'>
       <img src={image1} alt='bubble' className='bob'/>
       <img src={image3} alt='bubble' className='bob1' />
       <img src={image1} alt='bubble' className='bob2' />
       <img src={image4} alt='bubble' className='bob3' />
       <img src={image5} alt='bubble' className='bob4' />
       <img src={image6} alt='bubble' className='bob5' />
       <img src={image7} alt='bubble'  className='bob6'/>
       <img src={image8} alt='bubble'  className='bob7'/>


       <img src={image1} alt='bubble' className='bob8' />
       <img src={image1} alt='bubble' className='bob9'/>
       <img src={image3} alt='bubble'  className='bob10'/>
       <img src={image4} alt='bubble' className='bob11'/>
       <img src={image5} alt='bubble' className='bob12'/>
       <img src={image9} alt='bubble' className='bob13'/>
       <img src={image7} alt='bubble' className='bob14'/>
       <img src={image8} alt='bubble' className='bob15'/>

      </div>

      <div className='flex flex-col justify-center items-center my-40'>
        <h1 className='text-white text-7xl font-bold pb-8'>Nordic-Giant Project</h1>
        <p className='text-white text-2xl text-center pb-8'>I am a web development engineer and I use react and vue.js to develop pages.<br></br> This project is a resume template that can be used as the project home page or resume page.</p>
        <div className='flex flex-row gap-x-6 pt-4'>
          <button className='bg-emerald-600 text-white  py-4 hover:bg-pink-600 relative ' onClick={handleButtonClick}>
            <img src={image10} alt='book'  className=' absolute koko'/>
            <h3>Project</h3>
          </button>
          
          <button className='bg-slate-800 text-white py-4 hover:bg-pink-600 relative '  onClick={handleButtonClick1}>
          <img src={image11} alt='book'  className=' absolute koko'/>
          <h3 id="pousser">Github</h3>
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default BuBles;
