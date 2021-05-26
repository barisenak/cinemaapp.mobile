import React from 'react';
import {Image, ScrollView} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from './FilmCard.styles';
import moment from 'moment';

function FilmCard({film}) {
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
    </ScrollView>
  );
}

export default FilmCard;
