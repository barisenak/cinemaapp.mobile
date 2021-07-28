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
import {Text} from 'app/components/partial/Text';
import {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import {checkLocationPermission} from 'app/utils/permissions';
import {INIT_REGION} from 'app/enum/location.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {getStyles} from './Map.styles';

class Map extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

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
        <View style={this.props.styles.myClusterStyle}>
          <Text style={this.props.styles.myClusterTextStyle}>{pointCount}</Text>
        </View>
      </Marker>
    );
  };

  clusterPress = async (cluster, markers) => {
    this.fadeIn();
    await this.props.putMarkers(markers);
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
      <View style={this.props.styles.pointContainer}>
        <Image
          style={this.props.styles.img}
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
        underlayColor={this.props.styles.screenBackground}
        onPress={() => {
          this.fadeOut();
          this.props.onPressPoint(item);
        }}>
        <View style={this.props.styles.markerWrapper}>
          <View>
            <Text style={this.props.styles.textName}>{item.name}</Text>
            <Text style={this.props.styles.text}>{item.address}</Text>
            <Text style={this.props.styles.text}>{item.city}</Text>
          </View>
          <Image
            style={this.props.styles.imgInAnimation}
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
      <ScrollView style={this.props.styles.container}>
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
          ref={this.myRef}
          radius={70}
          renderMarker={this.renderMarker}
          renderCluster={this.renderCluster}
          onClusterPress={this.clusterPress}
        />
        <Animated.FlatList
          pagingEnabled
          style={[
            this.props.styles.fadingContainer,

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

export default withTranslation('tickets')(withTheme(getStyles)(Map));

//lodash.map
