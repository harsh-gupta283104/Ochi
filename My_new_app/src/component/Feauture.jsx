import React from 'react';
import './About.css'
function Feauture() {
    
  return (
    
    <div className='w-full py-20 bg-zinc-600 '>
        <div className='border-b-[1px] border-zinc-100 pb-20 font-["Neue_Montreal"]-700 mb-20'>
            <h1 className='text-8xl'>Featured projects</h1>  
        </div>      
            <div className="cards h-[80vh] flex gap-40 bg-zinc-600 py-10 px-10">
                
                <div className="cardContainer relative w-2/3 rounded-3xl h-[70vh] ">
                    <h1 className='flex overflow-hidden absolute text-8xl font-["Neue_Montreal"] font-bold  left-full -translate-x-[2.5vw] top-1/2 text-[#d3ff34] z-[9]'>
                        {"FYDE".split('').map((item, index)=><span className='span1 block'>{item}</span>)}
                    </h1>
                        <div className="card w-full h-full  rounded-3xl overflow-hidden">
                            <img src="./images/card1.png" alt="image" className='w-full h-full'/>
                        </div>
                </div>
                <div className="cardContainer2  relative w-2/3 rounded-3xl h-[70vh]">
                        <h1 className='flex overflow-hidden absolute  text-8xl font-["Neue_Montreal"] font-bold text-[#d3ff34] right-full top-1/2'>
                            {"VISE".split('').map((item, index)=><span className='span2 block' >{item}</span>)}
                        </h1>
                <div className="card w-full h-full  rounded-3xl overflow-hidden bg-green-500">
                            <img src="./images/card2.jpg" alt="image" className='w-full h-full'/>
                        </div>
                </div>
            </div>  
    </div>
  )
}

export default Feauture


