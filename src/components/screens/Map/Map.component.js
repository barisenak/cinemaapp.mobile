/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView} from 'react-native';

import debounce from 'lodash/debounce';

import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  checkNotifications,
} from 'react-native-permissions';

import MapView from 'react-native-maps';
import {styles} from '../Map/Map.styles';

function Map({navigation}) {
  check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      // …
    });
  request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
    console.log(result);
  });
  checkNotifications()
    .then(({status, settings}) => {
      console.log(status, 'status');
      console.log(settings, 'settings');
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <MapView
        showsUserLocation
        style={styles.map}
        initialRegion={{
          latitude: 53.89969038847524,
          longitude: 27.55489139255121,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScrollView>
  );
}

export default Map;
