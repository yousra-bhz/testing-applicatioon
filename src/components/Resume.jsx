import '../App.css';

function Resume() {
  return (
    <div className='w-full py-40' id='resume'>
      <div className='w-60 flex flex-col mx-auto gap-y-10'>
        <div className='flex flex-row w-full '>
          <h2 className='w-1/3 text-xl font-bold underline underline-offset-[10px] decoration-4 decoration-blue-500'>Education</h2>
          <div className='w-2/3 flex flex-col' >
            <h1 className='font-bold text-2xl mb-4'>University ?</h1>
            <h3 className='font-semibold text-gray-600 mb-2 '>Masters in Beer tasting • April 2017</h3>
            <p className='text-gray-600'>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>

            <h1 className='font-bold text-2xl mb-4'>School #1 Maybe College?</h1>
            <h3 className='font-semibold text-gray-600 mb-2'>What did you study 101 • March 2013</h3>
            <p className='text-gray-600'>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
          </div>
        </div>

        <div className='flex flex-row w-full '>
          <h2 className='w-1/3 text-xl font-bold underline underline-offset-[10px] decoration-4 decoration-blue-500'>Work</h2>
          <div className='w-2/3'>
            <h1 className='font-bold text-2xl mb-4'>Awesome Design Studio</h1>
            <h3 className='font-semibold text-gray-600 mb-2'>Senior UX God • March 2018 - Present</h3>
            <p className='text-gray-600'>Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p>

            <h1 className='font-bold text-2xl mb-4'>Super Cool Studio</h1>
            <h3 className='font-semibold text-gray-600 mb-2'>Junior bug fixer• March 2017 - February 2018</h3>
            <p className='text-gray-600'>Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
        </div>

        <div className='flex flex-row w-full'>
          <h2 className='w-1/3 text-xl font-bold underline underline-offset-[10px] decoration-4 decoration-blue-500'>Skills</h2>
          <div className='w-2/3 flex flex-col'>
            <p className='text-gray-600 mb-4'>Here you can create a short write-up of your skills to show off to employers</p>
            <h2 className='font-semibold text-xl'>PYTHON</h2>
            <div className='w-full h-10 bg-stone-700 my-4'>
              <div className='w-60 h-10 bg-green-400'></div>
            </div>

            <h2 className='font-semibold text-xl'>VUE JS</h2>
            <div className='w-full h-10 bg-stone-700 my-4'>
              <div className='w-55 h-10 bg-stone-500'></div>
            </div>

            <h2 className='font-semibold text-xl'>REACT JS</h2>
            <div className='w-full h-10 bg-stone-700 my-4'>
              <div className='w-50 h-10 bg-pink-600'></div>
            </div>

            <h2 className='font-semibold text-xl'>CSS</h2>
            <div className='w-full h-10 bg-stone-700 my-4'>
              <div className='w-90 h-10 bg-indigo-300'></div>
            </div>

            <h2 className='font-semibold text-xl'>PHP</h2>
            <div className='w-full h-10 bg-stone-700 my-4'>
              <div className='w-80 h-10 bg-amber-950'></div>
            </div>

            <h2 className='font-semibold text-xl'>SWIFT</h2>
            <div className='w-full h-10 bg-stone-700 my-4'>
              <div className='w-50 h-10 bg-green-700'></div>
            </div>

            <h2 className='font-semibold text-xl'>JAVA</h2>
            <div className='w-full h-10 bg-stone-700 my-4'>
              <div className='w-80 h-10 bg-teal-700'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
