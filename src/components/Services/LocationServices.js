import camelize from "camelize";

import { locations } from './LocationMock';


export const LocationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if(!locationMock){
      reject('Not found...👎');
    }else {
      resolve(locationMock);
    }
  });
}

export const LocationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {}} = formattedResponse.results[0];
   const { lat, lng } = geometry.locations;

   return { lat, lng }
};