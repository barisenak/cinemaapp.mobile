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
import {getStyles} from '../CinemaCard/CinemaCard.styles';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function CinemaCard({
  cinema,
  navigation,
  route,
  user,
  getFilmCard,
  ts,
  styles,
}) {
  if (!cinema) {
    return null;
  }

  const sections = [
    {
      id: 'name',
      iconName: 'theater',
      name: ts('Name'),
      getValue: get('name'),
    },
    {
      id: 'address',
      iconName: 'map-marker',
      name: ts('Address'),
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
        <Image source={{uri: item.img}} style={styles.card} />
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
        {ts('You can watch in cinema')} {cinema.name}:
      </Text>
      <View style={styles.sectionContainer}>
        <FlatList
          data={cinema.films}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          // REVIEW: I think it's superfluous and should not be here
          refreshing="true"
        />
      </View>
    </ScrollView>
  );
}

export default withTranslation('cinemaCard')(withTheme(getStyles)(CinemaCard));
