import React from 'react';
import {Image, ScrollView, TouchableHighlight, View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from './CinemaCard.styles';
import {FILM_CARD} from 'app/enum/navigation.enum';

import get from 'lodash/get';

function CinemaCard({cinema, navigation, route, user, getFilmCard}) {
  if (!cinema) return null;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Image source={{uri: get(cinema, 'img')}} style={styles.image}></Image>
      <Text style={styles.textBlock}>Name: {cinema.name}</Text>
      <Text style={styles.textBlock}>Address: {cinema.address}</Text>
      <Text style={styles.textBlock}>You can watch in {cinema.name}:</Text>
      <View style={styles.sectionContainer}>
        {cinema.films &&
          cinema.films.map((film, index) => (
            <TouchableHighlight
              style={styles.card}
              activeOpacity={0.5}
              key={index}
              underlayColor="white"
              onPress={() => {
                getFilmCard(film.id);
                navigation.navigate(FILM_CARD, {
                  name: film.name,
                  filmId: film.id,
                  userId: user?.id,
                });
              }}>
              <Image source={{uri: film.img}} style={styles.card} />
            </TouchableHighlight>
          ))}
      </View>
    </ScrollView>
  );
}

export default CinemaCard;
