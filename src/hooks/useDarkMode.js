import useLocalStorage from './useLocalStorage';

function useDarkMode(key){
    const [darkMode, setDarkMode] = useLocalStorage(key);
    

}