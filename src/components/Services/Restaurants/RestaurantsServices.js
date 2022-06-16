import { mocks } from './Mock';
import camelize from 'camelize';

export const RestaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if(!mock) {
      reject('Not found...')
    }
    resolve(mock);
  })
};

const RestaurantTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
}

RestaurantRequest().then(RestaurantTransform).then((transformedResponse) => {
  console.log(transformedResponse);
}).catch((err) => {
  console.log(err);
})