import React from 'react';
import './index.css'; 
import Navbar from './component/Navbar';
import Landing from './component/Landing';
import Marquee from './component/Marquee';
import About from './component/About';
import Eyes from './component/Eyes';
import Feauture from './component/Feauture';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
     <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About />
      <Eyes/>
      <Feauture/>
     </div>
    </>
  )
}

export default App
 