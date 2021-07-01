import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './CinemaCard.styles';

import {Text} from 'app/components/partial/Text';

import {FILM_CARD} from 'app/enum/navigation.enum';

import get from 'lodash/fp/get';

function CinemaCard({cinema, navigation, route, user, getFilmCard}) {
  if (!cinema) {
    return null;
  }

  const sections = [
    {
      id: 'name',
      iconName: 'theater',
      name: 'Name',
      getValue: get('name'),
    },
    {
      id: 'address',
      iconName: 'map-marker',
      name: 'Address',
      getValue: get('address'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        style={styles.card}
        activeOpacity={0.5}
        underlayColor="white"
        key={item.id}
        onPress={() => {
          getFilmCard(item.id);
          navigation.navigate(FILM_CARD, {
            name: item.name,
            filmId: item.id,
            userId: user?.id,
          });
        }}>
        <Image source={{uri: item.img}} style={styles.card} />
      </TouchableHighlight>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Image source={{uri: cinema.img}} style={styles.image} />

      {sections.map(({id, iconName, name, getValue}) => {
        return (
          <View key={id} style={styles.infoContainer}>
            <View style={styles.intoTitleContainer}>
              <MaterialCommunityIcon
                name={iconName}
                size={20}
                style={styles.infoIcon}
              />
              <Text style={styles.infoTitle}>{name}</Text>
            </View>
            <Text style={styles.infoValue}>{getValue(cinema)}</Text>
          </View>
        );
      })}

      <Text style={styles.textBlock}>You can watch in {cinema.name}:</Text>
      <View style={styles.sectionContainer}>
        <FlatList
          data={cinema.films}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          refreshing="true"
        />
      </View>
    </ScrollView>
  );
}

export default CinemaCard;
