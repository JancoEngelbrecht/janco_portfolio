import { useEffect, useState } from "react"

// Custom Hook
const usePlaygroundEffects = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => { 
        setDropdownVisible((prev) => !prev)
     }


    //useEffect: Run code after Component Renders
    useEffect(() => {
        
        const handleClickOutside = (e) => { 
            const dropdownButton = document.getElementById('dropdownButton')
            const dropdownContent = document.getElementById('dropdownContent')

            if (dropdownButton && dropdownContent && 
                !dropdownButton.contains(e.target) && 
                !dropdownContent.contains(e.target)) {
                setDropdownVisible(false);
            }
        };

        // Add event listener for clicks outside the dropdown
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { isDropdownVisible, toggleDropdown };

    };
    
 

export default usePlaygroundEffects