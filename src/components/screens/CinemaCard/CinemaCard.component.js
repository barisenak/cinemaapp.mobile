import React from 'react';
import {Image, ScrollView, TouchableHighlight, View} from 'react-native';
import get from 'lodash/fp/get';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from 'app/components/partial/Text';

import {styles} from './CinemaCard.styles';
import {FILM_CARD} from 'app/enum/navigation.enum';

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
        {/*

            REVIEW: Please don't use {in} operator, it looks unclear and difficult to read.
            You can use either optional chaining or lodash.
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

            cinema?.films?.map(...);

            import map from 'lodash/map';
            import get from 'lodash/get';
            map(get(cinema, films), () => { ... });

        */}
        {'films' in cinema
          ? cinema.films.map((film, index) => (
              <TouchableHighlight
                style={styles.card}
                activeOpacity={0.5}
                key={index}
                underlayColor="white"
                onPress={() => {
                  // REVIEW: It's a bad approach to write such inline functions, because it's difficult read
                  // and we need place business logic right inside JSX code (mix UI and logic).
                  // Let's move navigation logic out of component.
                  // You can use third {connect} argument for example, so it'll be inside connect file.
                  getFilmCard(film.id);
                  navigation.navigate(FILM_CARD, {
                    name: film.name,
                    filmId: film.id,
                    userId: user?.id,
                  });
                }}>
                <Image source={{uri: film.img}} style={styles.card} />
              </TouchableHighlight>
            ))
          : null}
      </View>
    </ScrollView>
  );
}

export default CinemaCard;
