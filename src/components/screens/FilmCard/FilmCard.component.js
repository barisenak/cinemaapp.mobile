import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';
import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from 'app/components/partial/Text';

import {styles} from './FilmCard.styles';
import moment from 'moment';
import {CINEMA_CARD, FILM_CARD, SEATS_CARD} from 'app/enum/navigation.enum';
import {Button} from 'app/components/partial/Button';

function FilmCard({navigation, film, cinemas, getCinemaCard, user, language}) {
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

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        style={styles.card}
        activeOpacity={0.5}
        underlayColor="white"
        key={item.id}
        onPress={() => {
          getCinemaCard(item.id);
          navigation.navigate(CINEMA_CARD, {
            name: item.name,
            cinemaId: item.id,
            userId: user?.id,
            prevScreen: FILM_CARD,
          });
        }}>
        <Image source={{uri: item.img}} style={styles.card} />
      </TouchableHighlight>
    );
  };

  const renderBtnItem = ({item}) => {
    return (
      <Button
        key={item.id}
        onPress={() => {
          getCinemaCard(item.id);
          navigation.navigate(SEATS_CARD, {
            name: item.name,
            filmId: film.id,
            userId: user?.id,
          });
        }}>
        {item.name}
      </Button>
    );
  };

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

      {cinemas.length ? (
        <Text style={[styles.infoTitle, styles.textBlock]}>
          Tikets booking:
        </Text>
      ) : null}
      <View style={styles.sectionContainer}>
        {cinemas.length ? (
          <FlatList
            data={cinemas}
            renderItem={renderBtnItem}
            keyExtractor={item => item.id}
            horizontal
            refreshing="true"
          />
        ) : null}
      </View>

      {cinemas.length ? (
        <Text style={[styles.infoTitle, styles.textBlock]}>
          You can watch {film.name} in:
        </Text>
      ) : null}
      <View style={styles.sectionContainer}>
        {cinemas.length ? (
          <FlatList
            data={cinemas}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            refreshing="true"
          />
        ) : null}
      </View>
    </ScrollView>
  );
}

export default FilmCard;
