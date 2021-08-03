import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from 'app/components/partial/Text';

import {FILM_CARD} from 'app/enum/navigation.enum';

import get from 'lodash/fp/get';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyles} from '../CinemaCard/CinemaCard.styles';

function CinemaCard({cinema, navigation, user, getFilmCard, ts, styles}) {
  if (!cinema) {
    return null;
  }

  const sections = [
    {
      id: 'name',
      iconName: 'theater',
      name: ts('name'),
      getValue: get('name'),
    },
    {
      id: 'address',
      iconName: 'map-marker',
      name: ts('address'),
      getValue: get('address'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        style={styles.card}
        activeOpacity={0.5}
        underlayColor={styles.screenBackground.backgroundColor}
        key={item.id}
        onPress={() => {
          getFilmCard(item.id);
          navigation.navigate(FILM_CARD, {
            name: item.name,
            filmId: item.id,
            userId: user?.id,
          });
        }}>
        <Image source={{uri: item?.img}} style={styles.card} />
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
                color={styles.littleIcons.color}
              />
              <Text style={styles.infoTitle}>{name}</Text>
            </View>
            <Text style={styles.infoValue}>{getValue(cinema)}</Text>
          </View>
        );
      })}

      <Text style={styles.textBlock}>
        {ts('youCanWatch')} {cinema.name}:
      </Text>
      <View style={styles.sectionContainer}>
        <FlatList data={cinema.films} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
}

export default withTranslation('cinemaCard')(withTheme(getStyles)(CinemaCard));
