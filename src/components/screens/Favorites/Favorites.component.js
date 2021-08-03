/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {View, Image, TouchableHighlight, FlatList} from 'react-native';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';

import {
  SELECTED_TAB_CINEMAS,
  SELECTED_TAB_FILMS,
} from 'app/enum/favorites.enum';
import {
  AUTHORIZATION,
  FILM_CARD,
  CINEMA_CARD,
  FAVORITES,
} from 'app/enum/navigation.enum';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyles} from '../Favorites/Favorites.styles';
import isEmpty from 'lodash/isEmpty';

function Favorites({
  navigation,
  selectedTab,
  setSelectedTab,
  userData,
  getFilmCard,
  getCinemaCard,
  ts,
  styles,
}) {
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        style={styles.card}
        activeOpacity={0.5}
        key={item.id}
        underlayColor={styles.screenBackground.backgroundColor}
        onPress={() => {
          if (item.location) {
            getCinemaCard(item.id);
            navigation.navigate(CINEMA_CARD, {
              name: item.name,
              cinemaId: item.id,
              userId: userData?.id,
              prevScreen: FAVORITES,
            });
          } else {
            getFilmCard(item.id);
            navigation.navigate(FILM_CARD, {
              name: item.name,
              filmId: item.id,
              userId: userData?.id,
              prevScreen: FAVORITES,
            });
          }
        }}>
        <Image source={{uri: item?.img}} style={styles.card} />
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.screenBackground}>
      <View style={styles.navTabWrapper}>
        <Button
          disabled={!userData}
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_FILMS
                ? [{fontWeight: 'bold'}, styles.text]
                : styles.text,
          }}
          onPress={useCallback(() => {
            setSelectedTab(SELECTED_TAB_FILMS);
          }, [])}>
          {ts('films')}
        </Button>
        <Button
          disabled={!userData}
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_CINEMAS
                ? [{fontWeight: 'bold'}, styles.text]
                : styles.text,
          }}
          onPress={useCallback(() => {
            setSelectedTab(SELECTED_TAB_CINEMAS);
          }, [])}>
          {ts('cinemas')}
        </Button>
      </View>

      {!userData ? (
        <View style={styles.signInContainer}>
          <Text style={styles.text}> {ts('pleaseSignIn')}</Text>
          <Button
            type="primary"
            onPress={() =>
              navigation.navigate(AUTHORIZATION, {prevScreen: FAVORITES})
            }>
            {ts('login')}
          </Button>
        </View>
      ) : selectedTab === SELECTED_TAB_FILMS ? (
        <View style={styles.sectionContainer}>
          {userData.favouriteFilms && (
            <FlatList
              data={userData.favouriteFilms}
              style={styles.flatList}
              contentContainerStyle={styles.cardsContainer}
              renderItem={renderItem}
              numColumns={3}
              horizontal={false}
            />
          )}
          {isEmpty(userData.favouriteFilms) && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{ts('youNotHaveFavFilms')}</Text>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.sectionContainer}>
          {userData.favouriteCinemas && (
            <FlatList
              data={userData.favouriteCinemas}
              style={styles.flatList}
              contentContainerStyle={styles.cardsContainer}
              renderItem={renderItem}
              numColumns={3}
              horizontal={false}
            />
          )}
          {isEmpty(userData.favouriteCinemas) && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{ts('youNotHaveFavCinemas')}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default withTranslation('favorites')(withTheme(getStyles)(Favorites));
