/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Image, ScrollView, View} from 'react-native';

import debounce from 'lodash/debounce';

import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  checkNotifications,
} from 'react-native-permissions';

import MapView, {Callout, Marker} from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';
import {styles} from '../Map/Map.styles';
import Geolocation from '@react-native-community/geolocation';
import {Text} from 'app/components/partial/Text';
import {Component} from 'react';

function Map({
  navigation,
  location,
  setLocation,
  getAllCinemas,
  cinemas,
  onPressPoint,
}) {
  // check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
  //   .then(result => {
  //     switch (result) {
  //       case RESULTS.UNAVAILABLE:
  //         console.log(
  //           'This feature is not available (on this device / in this context)',
  //         );
  //         break;
  //       case RESULTS.DENIED:
  //         console.log(
  //           'The permission has not been requested / is denied but requestable',
  //         );
  //         break;
  //       case RESULTS.LIMITED:
  //         console.log('The permission is limited: some actions are possible');
  //         break;
  //       case RESULTS.GRANTED:
  //         console.log('The permission is granted');
  //         break;
  //       case RESULTS.BLOCKED:
  //         console.log('The permission is denied and not requestable anymore');
  //         break;
  //     }
  //   })
  //   .catch(error => {
  //     // …
  //   });
  // request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
  //   console.log(result);
  // });

  // checkNotifications()
  //   .then(({status, settings}) => {
  //     console.log(status, 'status');
  //     console.log(settings, 'settings');
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  const INIT_REGION = {
    latitude: 53.89969038847524,
    longitude: 27.55489139255121,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      const lat = JSON.stringify(position.coords.latitude);
      const lng = JSON.stringify(position.coords.longitude);
      setLocation({lat, lng});
    });
  }, []);

  useEffect(() => {
    getAllCinemas();
  }, []);

  if (!cinemas.length) {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.screenBackground}>
        <MapView
          showsUserLocation
          style={styles.map}
          initialRegion={INIT_REGION}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <MapView showsUserLocation style={styles.map} initialRegion={INIT_REGION}>
        {cinemas.map(marker => (
          <Marker
            onPress={() => onPressPoint(marker)}
            key={marker.id}
            coordinate={{
              latitude: marker.location.lat,
              longitude: marker.location.lng,
            }}>
            <View style={styles.pointContainer}>
              <Image
                style={styles.img}
                source={{
                  uri: marker.img,
                }}></Image>
            </View>
          </Marker>
        ))}
      </MapView>
    </ScrollView>
  );
}
export default Map;

// export default class Map extends Component {
//   renderCluster = (cluster, onPress) => {
//     const pointCount = cluster.pointCount,
//       coordinate = cluster.coordinate,
//       clusterId = cluster.clusterId;

//     const clusteringEngine = this.map.getClusteringEngine(),
//       clusteredPoints = clusteringEngine.getLeaves(clusterId, 100);

//     return (
//       <Marker coordinate={coordinate} onPress={onPress}>
//         <View style={styles.myClusterStyle}>
//           <Text style={styles.myClusterTextStyle}>{pointCount}</Text>
//         </View>
//         <Callout>
//           <ScrollView>
//             {clusteredPoints.map(p => (
//               <Image source={p.image} />
//             ))}
//           </ScrollView>
//         </Callout>
//       </Marker>
//     );
//   };

//   renderMarker = data => (
//     <Marker
//       key={data.id}
//       coordinate={{
//         latitude: data.location.lat,
//         longitude: data.location.lng,
//       }}>
//       <View style={styles.pointContainer}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: data.img,
//           }}></Image>
//       </View>
//     </Marker>
//   );

//   render() {
//     return (
//       <ClusteredMapView
//         style={{flex: 1}}
//         data={this.props.cinemas}
//         initialRegion={INIT_REGION}
//         ref={r => {
//           this.map = r;
//         }}
//         renderMarker={this.renderMarker}
//         renderCluster={this.renderCluster}
//       />
//     );
//   }
// }
