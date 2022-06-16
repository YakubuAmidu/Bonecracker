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

const RestaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.openning_hours && restaurant.openning_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
    }
  })

  return camelize(mappedResults);
}

RestaurantRequest().then(RestaurantTransform).then((transformedResponse) => {
  console.log(transformedResponse);
}).catch((err) => {
  console.log(err);
})