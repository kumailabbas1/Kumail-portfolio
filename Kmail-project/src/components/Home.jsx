import React from 'react';
import img from "../assets/img/hero1.jpg";
import Button from '../layouts/Button';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor'>
      <div className='flex flex-col text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4 pt-56'>
        <h1 className='text-6xl font-semibold '>I'm Kumail Abbas <br />
         <span className='text-brightColor'>Front-end </span>
         Developer
        </h1>
        <p className='text-lg font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat amet quisquam    mollitia itaque quis ratione incidunt sequi sit iusto animi! Error, perspiciatis! Excepturi id voluptatibus adipisci veritatis numquam explicabo dolorem!</p>
        <div>
          <Button title='HIRE ME' />
        </div>
      </div>
      <img className='mt-12' width={570} src={img} alt="img" />
    </div>
  );
}

export default Home;
