import React from 'react';
import {Image, ScrollView} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from './FilmCard.styles';
import moment from 'moment';

function FilmCard({route}) {
  const {description, image, duration, category, releaseDate} = route.params;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Image source={{uri: image}} style={{width: '100%', height: 560}}></Image>
      <Text style={styles.textBlock}>Category: {category}</Text>
      <Text style={styles.textBlock}>{description}</Text>
      <Text style={styles.textBlock}>Duration: {duration} hour(s)</Text>
      <Text style={styles.textBlock}>
        Release date: {moment(releaseDate).format('LL')}
      </Text>
    </ScrollView>
  );
}

export default FilmCard;
