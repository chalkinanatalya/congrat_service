import { createContext, useState } from "react";

export const textContext = createContext('');

export const TextContext = ({children}) => {
    const [text, setText] = useState('Поздравляю с Днем Рождения!')
    return (
    <textContext.Provider value={{text, setText}}>
        {children}
    </textContext.Provider>
    )
}