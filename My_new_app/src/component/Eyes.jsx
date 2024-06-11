import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(180);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle -180);
    };

window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='eyes w-full h-screen text-white overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed='-0.4' className='w-full h-full bg-[url("./images/Bg-image.jpg")] bg-cover bg-center'>
          <div data-scroll-section data-scroll-speed='-0.7' className='relative flex gap-12 w-1/3 top-1/4 left-1/2 transform -translate-y-[50%] -translate-x-[50%]'>
            <div className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100'>
              <div className='w-2/3 h-2/3 bg-gray-900 rounded-full flex items-center justify-center'>
                <div
                  className='line w-full h-fit'
                  style={{ transform: `rotate(${rotate}deg)` }}
                >
                  <div className='w-6 h-6 bg-zinc-100 rounded-full relative'></div>
                </div>
              </div>
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100'>
              <div className='w-2/3 h-2/3 bg-gray-900 rounded-full flex items-center justify-center'>
                <div
                  className='line w-full h-fit'
                  style={{ transform: `rotate(${rotate}deg)` }}
                >
                  <div className='w-6 h-6 bg-zinc-100 rounded-full relative'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Eyes;


// import React, { useEffect, useState } from 'react';

// function Eyes() {
//   const [position, setPosition] = useState({ left: 0, top: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const eyeDiameter = 15 * window.innerWidth / 100; // 15vw
//       const pupilDiameter = 8 * window.innerWidth / 100; // 8vw
//       const maxMove = (eyeDiameter - pupilDiameter) / 2;

//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;

//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       const deltaX = mouseX - centerX;
//       const deltaY = mouseY - centerY;

//       const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//       const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
//       const distanceRatio = Math.min(distance / maxDistance, 1);

//       const moveX = deltaX * distanceRatio * maxMove / maxDistance;
//       const moveY = deltaY * distanceRatio * maxMove / maxDistance;

//       setPosition({ left: moveX + 15, top: moveY + 15 });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className='eyes w-full h-screen text-white overflow-hidden'>
//       <div className='w-full h-full bg-[url("./images/Bg-image.jpg")] bg-cover bg-center'>
//         <div className='relative flex gap-12 w-1/3 top-1/4 left-1/2 transform -translate-y-[50%] -translate-x-[50%]'>
//           {[1, 2].map((_, index) => (
//             <div key={index} className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100'>
//               <div className='w-2/3 h-2/3 bg-gray-900 rounded-full flex items-center justify-center relative'>
//                 <div
//                   className='w-8 h-8 bg-zinc-100 rounded-full absolute'
//                   style={{ transform: `translate(${position.left}px, ${position.top}px)` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Eyes;
