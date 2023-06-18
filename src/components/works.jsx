import '../App.css';
import image1 from '../assets/01.jpg';
import image2 from '../assets/02.jpg';
import image3 from '../assets/03.jpg';
import image4 from '../assets/04.jpg';
import image5 from '../assets/05.jpg';
import image6 from '../assets/06.jpg';
import image7 from '../assets/OIP.jpg';
import image8 from '../assets/app.jpg';
import image9 from '../assets/R.jpg';
import image10 from '../assets/app2.jpg';
import image11 from '../assets/9377721c8871222aac6af5db8f84764f6d1d6db2-1396x698.webp';
import image12 from '../assets/app3.jpg';


function Works (){
    return(
   <div className='w-full bg-slate-200' id='works'>
    <div className='w-70 mx-auto py-40'>
        <h3 className='text-center mb-10'>CHECK OUT SOME OF MY WORKS.</h3>
        <div className='w-full flex flex-col gap-y-10'>
        <div className=' w-full flex flex-row justify-between'> 
        <div className='card'>
            <img src={image1} alt='first-project'/>
            <p className='text-red-800 '>Canadian Wanderlust</p>
        </div>

        <div className='card'>
            <img src={image2} alt='first-project'/>
            <p className='text-red-600'>Fury Fighting Gear</p>
        </div>

        <div className='card'>
            <img src={image3} alt='first-project'/>
            <p className='text-blue-800'>Original Triangle</p>
        </div>

        <div className='card'>
            <img src={image4} alt='first-project'/>
            <p className='text-blue-800'>Smirkspace</p>
        </div>
         </div>

         <div className=' w-full flex flex-row justify-between'> 
        <div className='card'>
            <img src={image5} alt='first-project'/>
            <p className='text-red-800'>game page</p>
        </div>

        <div className='card'>
            <img src={image6} alt='first-project'/>
            <p className='text-red-600'>programing book</p>
        </div>

        <div className='card'>
            <img src={image7} alt='first-project'/>
            <p className='text-blue-800'>second app</p>
        </div>

        <div className='card'>
            <img src={image8} alt='first-project'/>
            <p className='text-blue-800'>about colors</p>
        </div>
         </div>

         <div className=' w-full flex flex-row justify-between'> 
        <div className='card'>
            <img src={image9} alt='first-project'/>
            <p className='text-red-800'>dashbord design</p>
        </div>

        <div className='card'>
            <img src={image10} alt='first-project'/>
            <p className='text-red-600'>profile design</p>
        </div>

        <div className='card'>
            <img src={image11} alt='first-project'/>
            <p className='text-blue-800'>blue in out</p>
        </div>

        <div className='card'>
            <img src={image12} alt='first-project'/>
            <p className='text-blue-800'>your pupy</p>
        </div>
         </div>
        </div>
    </div>

   </div>
    )
}

export default Works;