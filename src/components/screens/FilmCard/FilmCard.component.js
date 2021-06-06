import React from 'react';
import {Image, ScrollView, TouchableHighlight, View} from 'react-native';
import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from 'app/components/partial/Text';

import {styles} from './FilmCard.styles';
import moment from 'moment';
import {CINEMA_CARD} from 'app/enum/navigation.enum';

function FilmCard({navigation, film, cinemas, getCinemaCard, user}) {
  const sections = [
    {
      id: 'category',
      iconName: 'format-list-bulleted',
      name: 'Category',
      getValue: get('category'),
    },
    {
      id: 'duration',
      iconName: 'clock-time-three-outline',
      name: 'Duration',
      getValue: flow([
        get('duration'),
        // TODO: replace this to show duration in minutes
        val => `${val} hour(s)`,
      ]),
    },
    {
      id: 'release_date',
      iconName: 'calendar-blank',
      name: 'Release date',
      getValue: flow([get('releaseDate'), date => moment(date).format('LL')]),
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Image source={{uri: film.img}} style={styles.image} />

      {sections.map(({id, iconName, name, getValue}) => (
        <View key={id} style={styles.infoContainer}>
          <View style={styles.intoTitleContainer}>
            <MaterialCommunityIcon
              name={iconName}
              size={20}
              style={styles.infoIcon}
            />
            <Text style={styles.infoTitle}>{name}</Text>
          </View>
          <Text style={styles.infoValue}>{getValue(film)}</Text>
        </View>
      ))}

      <Text style={[styles.infoTitle, styles.textBlock]}>
        You can watch {film.name} in:
      </Text>
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
