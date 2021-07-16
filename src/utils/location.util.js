import Geolocation from '@react-native-community/geolocation';

export function getPosition() {
  return new Promise((res, rej) => {
    Geolocation.getCurrentPosition(position => {
      res(position);
    }, rej);
  });
}
