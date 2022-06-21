import camelize from "camelize";

// Imported custom compoent
import { locations } from './LocationMock';

// LocationRequest function
export const LocationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if(!locationMock){
      reject('Not found...👎');
    } else {
      resolve(locationMock);
    }
  });
}

// LocationTransform function
export const LocationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
   const { lat, lng } = geometry.locations;

   return { lat, lng }
};