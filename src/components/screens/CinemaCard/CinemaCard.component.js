import React from 'react';
import {Image, ScrollView} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from './CinemaCard.styles';

function CinemaCard({route}) {
  const {description, image} = route.params;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Image source={{uri: image}} style={{width: '100%', height: 560}}></Image>
      <Text style={styles.textBlock}>{description}</Text>
    </ScrollView>
  );
}

export default CinemaCard;
