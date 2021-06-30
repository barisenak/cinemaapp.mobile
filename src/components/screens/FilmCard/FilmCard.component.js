import React from 'react';
import {Image, ScrollView, TouchableHighlight, View} from 'react-native';
import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from 'app/components/partial/Text';

import {styles} from './FilmCard.styles';
import moment from 'moment';
import {CINEMA_CARD, SEATS_CARD} from 'app/enum/navigation.enum';
import {Button} from 'app/components/partial/Button';

function FilmCard({navigation, film, cinemas, getCinemaCard, user}) {
  const sections = [
    {
      id: 'category',
      iconName: 'format-list-bulleted',
      name: 'Category',
      // (obj) => obj.category
      getValue: get('category'),

      // get("category")
      // attr => obj => obj[attr]
    },
    {
      id: 'duration',
      iconName: 'clock-time-three-outline',
      name: 'Duration',
      getValue: flow([get('duration'), val => `${val * 60} minutes`]),
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

      {/* REVIEW: Please use {FlatList} */}
      {cinemas.length ? (
        <Text style={[styles.infoTitle, styles.textBlock]}>
          Tikets booking:
        </Text>
      ) : null}
      <View style={styles.sectionContainer}>
        {cinemas.length
          ? cinemas.map((cinema, index) => (
              <Button
                key={index}
                onPress={() => {
                  getCinemaCard(cinema.id);
                  navigation.navigate(SEATS_CARD, {
                    name: cinema.name,
                    filmId: film.id,
                    userId: user?.id,
                  });
                }}>
                {cinema.name}
              </Button>
            ))
          : null}
      </View>

      {cinemas.length ? (
        <Text style={[styles.infoTitle, styles.textBlock]}>
          You can watch {film.name} in:
        </Text>
      ) : null}
      <View style={styles.sectionContainer}>
        {cinemas.length
          ? cinemas.map((cinema, index) => (
              <TouchableHighlight
                style={styles.card}
                activeOpacity={0.5}
                underlayColor="white"
                key={index}
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
            ))
          : null}
      </View>
    </ScrollView>
  );
}

export default FilmCard;
