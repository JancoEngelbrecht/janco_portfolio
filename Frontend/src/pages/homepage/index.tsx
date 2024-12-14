import React from "react";
import SkillsSection from "./skillssection";
import AboutSection from "./aboutsection";
import GallerySection from "./gallerysection";

const Home: React.FC = () => {
    return (
        <>
            <div className="pt-20">
                {/* Header Section */}
                <div className="mb-8 w-5/6 mx-auto"> 
                    <h1 className="text-gray-700 text-3xl font-bold mb-8 w-1/2 text-left"> 
                        From Process Engineering to Software Development
                    </h1>
                   <div className="border-t-2"> 
                        <div className="grid grid-cols-2 gap-20 justify-center pt-8"> {/* 'justify-center' centers grid items */}
                            <p className="text-gray-700 text-sm text-justify">
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="text-gray-700 text-sm text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SkillsSection />
            <AboutSection />
            <GallerySection />
        </>
    );
};

export default Home;