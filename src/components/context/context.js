import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reducer/reducer";
import { restaurantsData } from "../../database/restaurantsData";

export const Context = createContext();

function ContextProvider({ children }) {
  const initialState = {
    data: restaurantsData,
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  const [data, setData] = useState([]);
  const [isAdd,setIsAdd] = useState(false)

  const cuisineBtnHandler = (id) => {
    setData(restaurantsData);
    const updatedData = dataState?.data?.filter(
      (data) => data.cuisine_id === id
    );
    setData(updatedData);
  };

  const [restaurant,setRestaurent] = useState('')

  console.log(restaurant);
  const menuCardHandler = (name) => {
    setRestaurent(name)
  }



  const addReview = (reviewRating) => {
    const updatedData = data?.map((data) => {
      if (data?.name === restaurant) {
        return {
          ...data,
          ratings: [
            ...data?.ratings,
            {
              ...reviewRating,
              pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
              revName: "zabih",
            },
          ],
        };
      }
    });
    setData(updatedData);
  }

  return (
    <Context.Provider
      value={{
        dataState,
        dataDispatch,
        cuisineBtnHandler,
        data,
        setData,
        menuCardHandler,
        restaurant,
        setRestaurent,
        isAdd,
        setIsAdd,
        addReview,
   
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

export const useDataContext = () => useContext(Context);
