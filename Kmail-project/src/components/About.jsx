import React from 'react'
import SkillCard from '../layouts/SkillCard'

const About = () => {

    const skill = "w-11/12";
    const skill2 = "w-4/5";
    const skill3 = "w-2/3";

  return (
    <div className='min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor'>
      <div className='mt-16'>
        <h1 className='text-4xl font-semibold text-center lg:mt-2'>About me</h1>
      </div>
      
    <div className='-mb-10'>
      <div className='mb-10'>
        <h2 className='text-3xl font-semibold'>Hi there i am Kumail abbas a frontend devloper</h2>
        <p className='mt-4 lg:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod est maxime. Explicabo, adipisci eligendi! Quia omnis quis eligendi nihil ad aliquam officiis voluptas. Vitae asperiores tempora dignissimos incidunt dolore?</p>
      </div>
      <div>
        <h2 className='text-3xl font-semibold'>My Skills</h2>
        <div>
            <SkillCard title="HTML" width={skill} val="95%" />
            <SkillCard title="CSS" width={skill2} val="80%" />
            <SkillCard title="JavaScript" width={skill3} val="70%" />
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
