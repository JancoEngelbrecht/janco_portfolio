import { useEffect } from "react";

const useHeroScrollEffects = () => {
    useEffect(() => {

        // Store the original positions of the images
        const pencapImage = document.getElementById("pencap");
        const penbodyImage = document.getElementById("penbody");

        // Ensure both elements exist
        if (!pencapImage || !penbodyImage) return;

        const handleScroll = () => {
            // Get the current scroll position
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Calculate the distance to move based on scroll position
            // Adjust the factor (0.5) to control how fast the images move apart
            const moveDistance = scrollTop * 3;

            // Convert 20 degrees to radians for use with Math.cos and Math.sin
            const angle = 20 * (Math.PI / 180); // 20 degrees in radians

            // Calculate the X and Y displacements using trigonometry
            const xMove = moveDistance * Math.cos(angle); // Horizontal movement
            const yMove = moveDistance * Math.sin(angle); // Vertical movement

            // Move pencap and penbody images apart at a 20-degree angle based on scroll position
            pencapImage.style.transform = `translate(-${xMove}px, -${yMove}px)`; // Move pencap up-left
            penbodyImage.style.transform = `translate(${xMove}px, ${yMove}px)`; // Move penbody down-right
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Optionally return any values or functions here
};

export default useHeroScrollEffects;