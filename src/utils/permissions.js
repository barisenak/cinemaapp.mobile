import {check, PERMISSIONS, request} from 'react-native-permissions';
import {getPosition} from './location.util';

export async function checkLocationPermission() {
  return await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
    result => {
      if (result !== 'granted') {
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
          answer => {
            if (answer !== 'granted') {
              return;
            } else {
              return getPosition().then(position => {
                const lat = JSON.stringify(position.coords.latitude);
                const lng = JSON.stringify(position.coords.longitude);
                return {lat: +lat, lng: +lng};
              });
            }
          },
          error => console.log(error),
        );
      } else {
        return getPosition().then(position => {
          const lat = JSON.stringify(position.coords.latitude);
          const lng = JSON.stringify(position.coords.longitude);
          return {lat: +lat, lng: +lng};
        });
      }
    },
    error => console.log(error),
  );
}
