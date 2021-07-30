import AsyncStorage from '@react-native-community/async-storage';

export function setItem(key, token) {
  AsyncStorage.setItem(key, token);
}

export function getItem(key) {
  return AsyncStorage.getItem(key);
}
