import { createContext } from "react";
import { pandits } from "../assets/assets";



export const AppContext = createContext()


const AppContextProvider = (props) => {


    const value = {
        pandits
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider