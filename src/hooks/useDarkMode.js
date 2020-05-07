import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

function useDarkMode(key){
    //sets darkmode with the key
    const [darkMode, setDarkMode] = useLocalStorage(key);
    //useEffect hook that directly changes the DOM by...
    useEffect(() =>{
        //sets the darkmode class
        if(darkMode === true){
            document.body.classList.add('dark-mode');
        }
        //removes the darkmode class
        else{
            document.body.classList.remove('dark-mode');
        }
    })

}