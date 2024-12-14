import React from "react";

const AboutSection: React.FC = () => {
    return (
        <>
            <div className="pt-20 mx-auto grid grid-cols-[1fr_3fr] w-5/6">
                {/* First Column (smaller width) */}
                <div className="mb-8">
                    <h1 className="text-gray-700 text-md w-auto text-left"> 
                        ABOUT
                    </h1>
                </div>

                {/* Second Column (larger width) */}
                <div className="">
                    <div className="justify-center">
                        <h1 className="text-gray-700 text-3xl font-bold text-justify pb-10">Janco Engelbrecht</h1>
                        <p className="text-gray-700 text-sm text-justify w-2/3">
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;