import React, { useRef } from 'react'
import Card from '../compents/Card'
import { Globe } from '../compents/Globe'
import CopyMyEmail from '../compents/CopyMyEmail'
import { Frameworks } from '../compents/Frameworks'
import { Cover } from '../compents/Cover'
import { TextGenerateEffect } from '../compents/Text-generate-effect'

const About = () => {
  const grid2Container = useRef()
  return (

    <section id='about' className=' c-space section-spacing'>
      <h2 className='text-heading'>About me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png" alt=""
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] '
          />
          <div className="z-10">
            <p className='headtext'> Hi,I'm Manvender Singh </p>
            <p className='subtext'>I am a passionate MERN stack developer with a knack for crafting robust and scalable web applications.</p>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className='flex items-end text-5xl text-gray-500'>
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              image="/logos/react.svg"
              containerRef={grid2Container} />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              image="logos/php-svgrepo-com.svg" />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-45deg", bottom: "30%", left: "70%" }}
              text={"Design Pattern"} />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "75deg", top: "55%", left: "0%" }}
              text={"Design Principle"} />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              image="logos/html5.svg" />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "55deg", top: "75%", left: "5%" }}
              image="/logos/git.svg" />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "25deg", top: "5%", left: "25%" }}
              image="/logos/javascript.svg" />
          </div>
        </div>
        {/* grid 3 */}
        <div className="grid-black-color grid-3">

          <div className="z-10 w-[50%]">
            <p className='headtext'>Time Zone</p>
            <p className='subtext'>I'm based in India ,and open to work worldwide </p>
          </div>
          <figure className='absolute left-[30%] top-[10%]  '>
            <Globe />
          </figure>
        </div>
        {/* grid 4 */}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 ">
                <p className='text-center headtext'>
                  Do you want to stay in touch
                </p>
                <CopyMyEmail />
            </div>
        </div>
        {/* grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <Cover>
            <p className="headtext ">Tech Stack</p>
            </Cover>
            <p className="subtext">
              I specialize in a variety  of languages, Frameworks, and Tool that allow me to build robust and scalable application
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125  ">
            <Frameworks />

          </div>
        </div>
      </div>
    </section >

  )
}

export default About