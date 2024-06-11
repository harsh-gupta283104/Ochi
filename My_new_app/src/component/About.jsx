import React from 'react';
import './About.css';
import { IoIosArrowRoundUp } from "react-icons/io";
function About() {
  return (
    <>
      <div data-scroll data-scroll-selection data-scroll-speed='-0.1' className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className='font-["Neue_Montreal"] text-6xl p-20 leading-14'>
          Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='content border-t-2 border-zinc-500 border-b-2 flex justify-between'>
          <h1 className='text-xl mt-5'>
            What you can expect:
          </h1>
          <div className='content-text flex justify-between text-xl '>
            <p className='text-wrap w-[20vw] mb-20 text-xl'>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
              <br /><br />
              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
            </p>
            <div className='content-span '>
              <span >
                S:
              </span>
              {['Instagram', 'Behance', 'Facebook', 'LinkedIn'].map((item, index) => (
                <a key={index} className='text-base capitalize block '>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
              <div className="text ">
                    <h1 className='text-[3.5vw] ml-20'>
                      Our approach:       
                    </h1>
                    <span className='text-[1vw] flex border-2 border-zinc-800 w-fit p-3 uppercase ml-20 rounded-full gap-7'>
                      Read More
                      <IoIosArrowRoundUp className='rotate-[45deg] border-2 border-zinc-900 rounded-full size-7 bg-zinc-100' />
                    </span>
              </div>
              <div className="image mt-6 rounded-xl mr-12 overflow-hidden">
                    <img src="./images/portfolio.jpg" alt="image" />
              </div>
        </div>
      </div>
    </>
  );
}

export default About;
