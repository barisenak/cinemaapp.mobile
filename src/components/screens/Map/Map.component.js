/* eslint-disable react-native/no-inline-styles */
import {Text, Button, View, ScrollView} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {styles} from '../Map/Map.styles';

function Map({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <MapView
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
