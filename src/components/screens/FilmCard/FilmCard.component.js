import React from 'react';
import {Image, ScrollView, TouchableHighlight, View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from './FilmCard.styles';
import moment from 'moment';
import {CINEMA_CARD} from 'app/enum/navigation.enum';

function FilmCard({navigation, film, cinemas, getCinemaCard, user}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Image source={{uri: film.img}} style={styles.image} />
      <Text style={styles.textBlock}>Category: {film.category}</Text>
      <Text style={styles.textBlock}>{film.description}</Text>
      <Text style={styles.textBlock}>Duration: {film.duration} hour(s)</Text>
      <Text style={styles.textBlock}>
        Release date: {moment(film.releaseDate).format('LL')}
      </Text>
      <Text style={styles.textBlock}>You can watch {film.name} in:</Text>
      <View style={styles.sectionContainer}>
        {cinemas &&
          cinemas.map((cinema, index) => (
            <TouchableHighlight
              style={styles.card}
              activeOpacity={0.5}
              key={index}
              underlayColor="white"
              onPress={() => {
                getCinemaCard(cinema.id);
                navigation.navigate(CINEMA_CARD, {
                  name: cinema.name,
                  cinemaId: cinema.id,
                  userId: user?.id,
                });
              }}>
              <Image source={{uri: cinema.img}} style={styles.card} />
            </TouchableHighlight>
          ))}
      </View>
    </ScrollView>
  );
}

export default FilmCard;
