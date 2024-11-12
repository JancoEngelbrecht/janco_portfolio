import { useEffect, useState } from "react"

const useDropdownEffects = () => {

    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const toggleDropdown = () => { setDropdownVisible((prev) => !prev)}


    //useEffect: Run code after Component Renders
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => { 
            const dropdownButton = document.getElementById('dropdownButton')
            const dropdownContent = document.getElementById('dropdownContent')

            if (dropdownButton && dropdownContent && 
                !dropdownButton.contains(e.target as Node) && 
                !dropdownContent.contains(e.target as Node)) {
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
    
 

export default useDropdownEffects