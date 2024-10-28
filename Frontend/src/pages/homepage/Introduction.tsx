import React from "react";

import jancocloseup from "../../assets/janco_closeup.png"
import jancobackground from "../../assets/janco_background.png"
import reactIcon from "../../assets/React.png"
import tailwindIcon from "../../assets/Tailwind.png"
import javascriptIcon from "../../assets/JavaScript.png"
import mongodbIcon from "../../assets/MongoDB.png"
import htmlIcon from "../../assets/HTML5.png"
import githubIcon from "../../assets/GitHub.png"
import azureIcon from "../../assets/Azure.png"
import cosmosdbIcon from "../../assets/CosmosBD.png"
import nodejsIcon from "../../assets/Node.js.png"
import pythonIcon from "../../assets/Python.png"
import vscodeIcon from "../../assets/VScode.png"

const Introduction:React.FC = () => {

    return (

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8">
            
            <div className="relative flex justify-center items-center ">
                <img 
                    src={jancocloseup}
                    alt="a closeup of janco engelbrecht"
                    id= "jancocloseup"
                    className="absolute w-3/4 md:w-9/12 h-auto z-50"
                />
                <img 
                    src={jancobackground}
                    alt="the background behind the closeup, two horizontal bar shapes"
                    id= "jancobackground"
                    className=" relative w-3/4 md:w-9/12 h-auto z-10"
                />

                <img 
                    src={reactIcon}
                    alt="react Icon"
                    id= "reacticon"
                    className=" absolute w-2/12 h-auto z-20"
                />

                <img 
                    src={tailwindIcon}
                    alt="tailwind Icon"
                    id= "tailwindicon"
                    className=" absolute w-2/12 h-auto z-30"
                />

                <img 
                    src={javascriptIcon}
                    alt="JS Icon"
                    id= "javascripticon"
                    className=" absolute w-2/12 h-auto z-10"
                />

                <img 
                    src={mongodbIcon}
                    alt="MongoDB Icon"
                    id= "mongodbicon"
                    className=" absolute w-2/12 h-auto z-20"
                />

                <img 
                    src={htmlIcon}
                    alt="HTML Icon"
                    id= "htmlicon"
                    className=" absolute w-2/12 h-auto z-10"
                />

                <img 
                    src={githubIcon}
                    alt="Github Icon"
                    id= "githubicon"
                    className=" absolute w-2/12 h-auto z-10"
                />

                <img 
                    src={azureIcon}
                    alt="Azure Icon"
                    id= "azureicon"
                    className=" absolute w-2/12 h-auto z-10"
                />

                <img 
                    src={cosmosdbIcon}
                    alt="Cosmosdb Icon"
                    id= "cosmosdbicon"
                    className=" absolute w-1/12 h-auto z-10"
                />

                <img 
                    src={nodejsIcon}
                    alt="Node.js Icon"
                    id= "nodejsicon"
                    className=" absolute w-2/12 h-auto z-10"
                />

                <img 
                    src={pythonIcon}
                    alt="Python Icon"
                    id= "pythonicon"
                    className=" absolute w-2/12 h-auto z-10"
                />

                <img 
                    src={vscodeIcon}
                    alt="VsCode Icon"
                    id= "vscodeicon"
                    className=" absolute w-1/12 h-auto z-10"
                />

            </div>

            <div className="flex flex-col justify-center items-start p-4 md:p-8">
                <div className="max-w-md text-white">
                <h2 className="text-3xl md:text-5xl font-bold tracking-wide">INTRODUCTION</h2>
                <p className="mt-4 text-lg md:text-2xl text-justify leading-relaxed hyphens-auto" >
                I am a Process Engineer with self-taught development experience, which include &plusmn; 8 months of experience specializing in React and JavaScript, and &plusmn; 1 year Python. I am skilled in using Azure, GitHub, MongoDB, Node.js, HTML, Tailwind CSS, and Visual Studio to build dynamic, responsive web applications. I am passionate about continuous learning, both in technology and personal development. In my free time, I enjoy exploring software development, reading self-help books, and music. I am eager to expand my skill set and contribute to innovative projects in a collaborative environment.
                </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;