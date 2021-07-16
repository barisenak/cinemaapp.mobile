/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  View,
  Animated,
  TouchableHighlight,
} from 'react-native';

import debounce from 'lodash/debounce';

import {Marker} from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';
import {styles} from '../Map/Map.styles';
import {Text} from 'app/components/partial/Text';
import {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import {checkLocationPermission} from 'app/utils/permissions';
import {INIT_REGION} from 'app/enum/location.enum';

export default class Map extends Component {
  state = {
    fadeAnim: new Animated.Value(800),
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 630,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 800,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
      coordinate = cluster.coordinate;

    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <View style={styles.myClusterStyle}>
          <Text style={styles.myClusterTextStyle}>{pointCount}</Text>
        </View>
      </Marker>
    );
  };

  renderMarker = data => (
    <Marker
      onPress={() => {
        this.fadeOut();
        this.props.onPressPoint(data);
      }}
      key={data.id}
      coordinate={{
        latitude: data.location.latitude,
        longitude: data.location.longitude,
      }}>
      <View style={styles.pointContainer}>
        <Image
          style={styles.img}
          source={{
            uri: data.img,
          }}
        />
      </View>
    </Marker>
  );

  renderItem = ({item}) => {
    return (
      <TouchableHighlight
        key={item.id}
        activeOpacity={0.5}
        underlayColor="white"
        onPress={() => {
          this.fadeOut();
          this.props.onPressPoint(item);
        }}>
        <View style={styles.markerWrapper}>
          <Text>{item.name}</Text>
          <Text>{item.address}</Text>
          <Image
            style={styles.img}
            source={{
              uri: item.img,
            }}
          />
        </View>
      </TouchableHighlight>
    );
  };

  async componentDidMount() {
    const coords = await checkLocationPermission();
    if (coords) {
      this.props.getLocation(coords);
    } else {
      this.props.getLocation({
        lat: INIT_REGION.latitude,
        lng: INIT_REGION.longitude,
      });
    }
  }

  render() {
    return isEmpty(this.props.location) ? null : (
      <ScrollView style={styles.container}>
        <ClusteredMapView
          showsUserLocation={true}
          style={{
            position: 'relative',
          }}
          data={this.props.cinemas?.map(el => ({
            ...el,
            location: {latitude: el.location.lat, longitude: el.location.lng},
          }))}
          initialRegion={{
            latitude: this.props.location.lat,
            longitude: this.props.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          ref={r => {
            this.map = r;
          }}
          radius={70}
          renderMarker={this.renderMarker}
          renderCluster={this.renderCluster}
          onClusterPress={async (cluster, markers) => {
            this.fadeIn();
            await this.props.putMarkers(markers);
          }}
        />
        <Animated.FlatList
          pagingEnabled
          style={[
            styles.fadingContainer,

            {
              transform: [{translateY: this.state.fadeAnim}],
            },
          ]}
          data={this.props.markers}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          horizontal
          initialNumToRender={1}
        />
      </ScrollView>
    );
  }
}

//lodash.map
