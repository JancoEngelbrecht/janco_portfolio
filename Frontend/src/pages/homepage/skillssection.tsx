import React from "react";
import ReactIcon from "../../assets/React.png"
import TailwindIcon from "../../assets/Tailwind.png"
import JavaScriptIcon from "../../assets/JavaScript.png"
import GithubIcon from "../../assets/GitHub.png"
import HTMLIcon from "../../assets/HTML5.png"
import NodejsIcon from "../../assets/Node.js.png"
import PythonIcon from "../../assets/Python.png"
import AzureIcon from "../../assets/Azure.png"
import MongoDBIcon from "../../assets/MongoDB.png"
import CosmosDBIcon from "../../assets/CosmosBD.png"





const SkillsSection: React.FC = () => {
  return (
    <>
    <div className="pt-20">
    <div className="bg-[#A9B4AF] bg-opacity-40 w-5/6 rounded-lg text-center mx-auto">
      <h2 className="text-2xl text-[#3D3D3D] text-left font-bold p-8">SKILLS</h2>
      <div className="grid grid-cols-5 gap-16 p-16 pb-20 pt-0">
        {/* React Icon */}
        <div className=" w-16 h-16 mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={ReactIcon}
            alt="React"
            className="w-full h-full"
          />
        </div>
        {/* Tailwind Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={TailwindIcon}
            alt="Tailwind"
            className="w-full h-full"
          />
        </div>
        {/* JavaScript Icon */}
        <div className="w-16 h-16 mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={JavaScriptIcon}
            alt="JavaScript"
            className="w-full h-full"
          />
        </div>
        {/* GitHub Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={GithubIcon}
            alt="GitHub"
            className="w-full h-full"
          />
        </div>
        {/* HTML Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={HTMLIcon}
            alt="HTML"
            className="w-full h-full"
          />
        </div>
        {/* Node.js Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={NodejsIcon}
            alt="Node.js"
            className="w-full h-full"
          />
        </div>
        {/* Python Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={PythonIcon}
            alt="Python"
            className="w-full h-full"
          />
        </div>
        {/* Azure Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={AzureIcon}
            alt="Azure"
            className="w-full h-full"
          />
        </div>
        {/* MongoDB Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={MongoDBIcon}
            alt="MongoDB"
            className="w-full h-full"
          />
        </div>
        {/* CosmosDB Icon */}
        <div className="w-16 h-16  mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition">
          <img
            src={CosmosDBIcon}
            alt="CosmosDB"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SkillsSection;