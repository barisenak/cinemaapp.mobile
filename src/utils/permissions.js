import Geolocation from '@react-native-community/geolocation';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  checkNotifications,
} from 'react-native-permissions';

export async function checkLocationPermission() {
  check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
    result => {
      if (result !== 'granted') {
        return request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
          answer => {
            if (answer !== 'granted') {
              return;
            } else {
              return Geolocation.getCurrentPosition(position => {
                const lat = JSON.stringify(position.coords.latitude);
                const lng = JSON.stringify(position.coords.longitude);
                return {lat, lng};
              });
            }
          },
          error => console.log(error),
        );
      } else {
        Geolocation.getCurrentPosition(pos => {
          // console.log(position);
          // const lat = JSON.stringify(position.coords.latitude);
          // const lng = JSON.stringify(position.coords.longitude);
          // return {lat, lng};
        });
      }
    },
    error => console.log(error),
  );
}
