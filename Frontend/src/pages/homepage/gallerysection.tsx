import React, { useRef, useState } from "react";
import image1 from "../../assets/gallery1.jpg"; 
import image2 from "../../assets/gallery2.jpg"; 
import image3 from "../../assets/gallery3.jpg"; 
import image4 from "../../assets/gallery4.jpg"; 
import image5 from "../../assets/gallery5.jpg"; 
import image6 from "../../assets/gallery6.jpg"; 


const images = [image1, image2, image3, image4, image5, image6]; 

const GallerySection: React.FC = () => {

    const scrollRef = useRef<HTMLDivElement | null>(null); // useReference of the scrollRef div

    const [isDragging, setIsDragging] = useState(false); // Is the gallery being dragged

    const [startX, setStartX] = useState(0); // X coordinate when the drag starts

    const [scrollLeft, setScrollLeft] = useState(0); // Initial position of container when drag starts

    const handleMouseDown = (e: React.MouseEvent) => {
        
        if (!scrollRef.current) return; // Current Refers to Null. 

        //If Not scrollRef not Null.
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft); // (Horizontal mouse position) - (Parent Left Edge |<-->| Div Left Edge)
        setScrollLeft(scrollRef.current.scrollLeft); // Set the left Edge of Div to 0 to record movement. (.scollLeft is a built in function)
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return; //If not dragging OR scrollRef is null (!null = true)

        e.preventDefault(); // Prevents browser default actions (ex. highlighting text)
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1; 
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="pt-20 pb-20 mx-auto w-5/6">
            {/* Container with horizontal scrolling */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto justify-center space-x-4 scrollbar-hide cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 h-64 rounded-lg shadow-lg"
                    >
                        <img
                            draggable="false"
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GallerySection;