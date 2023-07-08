import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducer/reducer";

export const Context = createContext()

function ContextProvider({children}) {

    const initialState = {
        a:"working"
    }

    const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  return (
    <Context.Provider value={{dataState,dataDispatch}}>{children}</Context.Provider>
  )
}

export default ContextProvider;

export const useDataContext = () => useContext(Context)