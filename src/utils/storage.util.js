import AsyncStorage from '@react-native-community/async-storage';

export function setItem(key, item) {
  return AsyncStorage.setItem(key, item);
}

export function getItem(key) {
  return AsyncStorage.getItem(key);
}
