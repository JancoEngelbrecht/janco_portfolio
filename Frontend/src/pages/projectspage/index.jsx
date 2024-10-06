import React from 'react';

import Laguna from "./laguna"

const Projects = () => {
  return (
    <div className=" text-white bg-gradient-to-tr from-neutral-800 from-0% to-neutral-950 to-70%">
        <h1 className="relative text-xl flex justify-center items-center w-full font-lucida 
                           sd:p-32 p-16 sd:top-32 space-x-4">
                <span className="text-gray-300">PERSONAL</span>
                <b className="text-white">PROJECTS</b>
            </h1>
        <Laguna />
    </div>
  );
};

export default Projects;