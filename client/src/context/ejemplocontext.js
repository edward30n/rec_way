
import React, { useState, createContext } from "react";

export const SegmentsContext = createContext();

export const SegmentosContextProvider = (props) => {
  const [segmentos, setSegmentos] = useState([]);
  //const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  //const addRestaurants = (restaurant) => {
  //  setRestaurants([...restaurants, restaurant]);
  return (
    <SegmentsContext.Provider
      value={{
        segmentos,
        setSegmentos,
      }}>
      {props.children}
    </SegmentsContext.Provider>
  );
};
