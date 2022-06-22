import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';

// Imported custom components
import { RestaurantsRequest, RestaurantsTransform } from './RestaurantsServices';

import { LocationContext } from '../Location/LocationContext';

// RestaurantsContext
export const RestaurantsContext = createContext();

// RestaurantContextProvider function
export const RestaurantsContextProvider = ({ Children }) => {
  const [restaurants, setRetaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { location } = useContext(LocationContext);
 
// retrieveRestaurants functions
  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRetaurants([]);
    
    setTimeout(() => {
      RestaurantsRequest(loc).then(RestaurantsTransform).then((results) => {
       setIsLoading(false);
       setRetaurants(results);
      }).catch((err) => {
        setError(err);
      })
    }, 2000);
  };

  useEffect(() => {
    if(location){
      const locationString = `${location.lat}, ${location.lng}`;
      retrieveRestaurants(locationString); 
    }
  }, [location]);

  return <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{Children}</RestaurantsContext.Provider>
}