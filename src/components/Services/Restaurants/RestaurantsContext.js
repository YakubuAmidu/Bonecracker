import React, { useState, createContext, useEffect, useMemo } from 'react';

import { RestaurantsRequest, RestaurantsTransform } from './RestaurantsServices';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ Children }) => {
  const [restaurants, setRetaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  console.log(restaurants)

  return <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{Children}</RestaurantsContext.Provider>
}