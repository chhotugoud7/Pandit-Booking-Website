import { createContext } from "react";

export const PanditContext = createContext()


const PanditContextProvider = (props) => {
 
    const value = {
        
    }
    return (
        <PanditContext.Provider value = {value}>
            {props.children}
        </PanditContext.Provider>

    )

}


export default PanditContextProvider