import React, { useState, createContext, useEffect, useMemo } from 'react';

// Imported custom components
import { RestaurantsRequest, RestaurantsTransform } from './RestaurantsServices';

// RestaurantsContext
export const RestaurantsContext = createContext();

// RestaurantContextProvider function
export const RestaurantsContextProvider = ({ Children }) => {
  const [restaurants, setRetaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
// retrieveRestaurants functions
  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      RestaurantsRequest().then(RestaurantsTransform).then((results) => {
       setIsLoading(false);
       setRetaurants(results);
      }).catch((err) => {
        setError(err);
      })
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{Children}</RestaurantsContext.Provider>
}