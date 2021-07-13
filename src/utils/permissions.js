import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  checkNotifications,
} from 'react-native-permissions';

export function checkLocationPermission() {
  let answer = check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
    result => result,
    error => console.log(error),
  );
  console.log(answer);
  // .then(result => {
  //   switch (result) {
  //     case RESULTS.UNAVAILABLE:
  //       console.log(
  //         'This feature is not available (on this device / in this context)',
  //       );
  //       break;
  //     case RESULTS.DENIED:
  //       console.log(
  //         'The permission has not been requested / is denied but requestable',
  //       );
  //       break;
  //     case RESULTS.LIMITED:
  //       console.log('The permission is limited: some actions are possible');
  //       break;
  //     case RESULTS.GRANTED:
  //       answer = result;
  //       return;
  //     case RESULTS.BLOCKED:
  //       console.log('The permission is denied and not requestable anymore');
  //       break;
  //   }
  //   console.log('here');
  //   request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
  //     answer = result;
  //   });
  // })
  // .catch(error => {
  //   // …
  // });
}
