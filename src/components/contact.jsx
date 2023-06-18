import '../App.css';
function Contact (){
    return(
     <div className='w-full bg-zinc-900 py-40 ' id='contact'>
        <div className='w-70 mx-auto flex flex-col'>
            <p className='text-gray-400 text-center'>Here is where you should write your message to readers to have them get in contact with you.</p>
            <div className='w-full flex flex-row gap-x-14 mt-10'>
                <div className='w-2/3 flex flex-col gap-y-10 '>
                    <div className='w-full flex flex-row'>
                       <label className='w-1/3 text-white font-bold text-xl'>Name</label>
                        <input className='w-2/3 h-10 bg-zinc-800' />
                    </div>

                    <div className='w-full flex flex-row'>
                   <label className='w-1/3 text-white font-bold text-xl'>Email</label>
                        <input className='w-2/3 h-10 bg-zinc-800' />
                    </div>

                    <div className='w-full flex flex-row'>
                   <label className='w-1/3 text-white font-bold text-xl'>Subject</label>
                        <input className='w-2/3 h-10 bg-zinc-800' />
                    </div>

                    <div className='w-full flex flex-row'>
                   <label className='w-1/3 text-white font-bold text-xl'>Message</label>
                        <input className='w-2/3 h-60 bg-zinc-800' />
                    </div>
                </div>

                <div className='w-1/3 flex flex-col gap-y-4'>
                    <h1 className='text-white font-bold text-xl'>Address and Phone</h1>
                    <p className='text-gray-400'>Nordic-Giant Project <br></br>555-555-5555</p>
                    <h1 className='text-white font-bold text-xl'>Latest Tweets</h1>
                    <p className='text-gray-400'>his is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                </div>
            </div>
        </div>

     </div>
    )
}

export default Contact;