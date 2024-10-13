import React from "react";
import pencap from "../../assets/pencap.png";
import penbody from "../../assets/penbody.png";

const HeroSection = () => {
    return (
        <div>
            <h1 className="absolute text-xl flex justify-center items-center w-full font-lucida 
                           sd:p-32 p-16 top-20 sd:top-32 space-x-4">
                <span className="text-gray-300">JANCO</span>
                <b className="text-white">ENGELBRECHT</b>
            </h1>
            <div className="flex overflow-hidden justify-center sd:top-52 items-center w-full h-screen relative">
                <img 
                    src={pencap}
                    alt="pen cap"
                    id="pencap"
                    className="absolute w-2/6 h-auto z-20"
                />
                <img 
                    src={penbody}
                    alt="pen body"
                    id="penbody"
                    className="absolute w-2/6 h-auto z-10"
                />
            </div>
        </div>
    );
};

export default HeroSection;