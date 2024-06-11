import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
function Landing() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.9' className="Landing_page w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-36 px-20">
        {['We Create', 'Eye Opening', 'Presentation'].map((items, index) => (
          <div key={index} className="masker flex">
            {index === 1 && (<motion.div initial={{width:0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[8vw] h-[vh] mr-3 rounded-md overflow-hidden relative  top-[1vw]"><img src="./images/Ochi.jpg" alt="images" /></motion.div>)}
            <div className="w-fit flex items-center">
            <h1 className="w-fit text-[6vw] uppercase font-semibold tracking-tight leading-[5.5vw] font-'Founders_Grotesk_X-Condensed'">
              {items}
            </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-700 mt-48  flex justify-between items-center py-5 px-20">
        {[" FOr public and private campanies", "From the first pitch to IPO"].map((item, index)=>(
          <p className=" text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2  font-light uppercase text-sm border-2 border-zinc-400 rounded-full">Start the project</div>
          <div className="w-10 h-10 border-2 items-center flex justify-center size-5 border-zinc-700 rounded-full">
            <span className='rotate-[45deg]'>
            <FaArrowAltCircleUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
