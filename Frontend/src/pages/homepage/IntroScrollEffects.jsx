import {useEffect} from "react";

const useIntroScrollEffect = () => {
    useEffect(() => {
        const handleScroll = () => {
            const reacticon = document.getElementById('reacticon')
            const tailwindicon = document.getElementById('tailwindicon')
            const javascripticon = document.getElementById('javascripticon')
            const mongodbicon = document.getElementById('mongodbicon')
            const htmlicon = document.getElementById('htmlicon')
            const githubicon = document.getElementById('githubicon')
            const azureicon = document.getElementById('azureicon')
            const cosmosdbicon = document.getElementById('cosmosdbicon')
            const nodejsicon = document.getElementById('nodejsicon')
            const pythonicon = document.getElementById('pythonicon')
            const vscodeicon = document.getElementById('vscodeicon')



            if (reacticon && tailwindicon && javascripticon && mongodbicon && htmlicon && githubicon && azureicon && cosmosdbicon && nodejsicon && pythonicon && vscodeicon) {
                const rect = reacticon.getBoundingClientRect();
                const windowHeight = window.innerHeight;
            
                if (rect.top < windowHeight && rect.bottom >= 0) {
                    reacticon.classList.add('animate-movereact');
                    tailwindicon.classList.add('animate-movetailwind');
                    javascripticon.classList.add('animate-movejavascript');
                    mongodbicon.classList.add('animate-movemongodb');
                    htmlicon.classList.add('animate-movehtml');
                    githubicon.classList.add('animate-movegithub');
                    azureicon.classList.add('animate-moveazure');
                    cosmosdbicon.classList.add('animate-movecosmosdb');
                    nodejsicon.classList.add('animate-movenodejs');
                    pythonicon.classList.add('animate-movepython');
                    vscodeicon.classList.add('animate-movevscode');
            
                } else {
                    reacticon.classList.remove('animate-movereact');
                    tailwindicon.classList.remove('animate-movetailwind');
                    javascripticon.classList.remove('animate-movejavascript');
                    mongodbicon.classList.remove('animate-movemongodb');
                    htmlicon.classList.remove('animate-movehtml');
                    githubicon.classList.remove('animate-movegithub');
                    azureicon.classList.remove('animate-moveazure');
                    cosmosdbicon.classList.remove('animate-movecosmosdb');
                    nodejsicon.classList.remove('animate-movenodejs');
                    pythonicon.classList.remove('animate-movepython');
                    vscodeicon.classList.remove('animate-movevscode');
                }
            }

        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
        
    }, []);
};

export default useIntroScrollEffect;