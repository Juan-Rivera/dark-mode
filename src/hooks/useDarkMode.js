import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

function useDarkMode(key){
    //sets darkmode with the key
    const [darkMode, setDarkMode] = useLocalStorage(key);
    //useEffect hook that directly changes the DOM by...
    useEffect(() =>{
        //sets the darkmode class
        if(darkMode === true){

        }
        //removes the darkmode class
        else{

        }
    })

}