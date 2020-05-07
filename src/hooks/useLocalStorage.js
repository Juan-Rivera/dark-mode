import { useState } from 'react';

function useLocalStorage(key, initialValue){
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
    // THIS IS THE VALUE PART OF THE HOOK
    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });
    //THIS IS THE SETTER PART OF THE HOOK
    const setValue = value => {
        // Saves state
        setStoredValue(value);
        // Saves to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };

    return [storedValue, setStoredValue];
} 
export default useLocalStorage