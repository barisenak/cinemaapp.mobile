/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, ScrollView, Image, TouchableHighlight} from 'react-native';

import {
  SELECTED_TAB_CINEMAS,
  SELECTED_TAB_FILMS,
} from 'app/enum/favorites.enum';

import {styles} from 'app/components/screens/Favorites/Favorites.styles';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';
import {AUTHORIZATION, FILM_CARD, CINEMA_CARD} from 'app/enum/navigation.enum';

function Favorites({
  navigation,
  selectedTab,
  setSelectedTab,
  userData,
  getFilmCard,
  getCinemaCard,
}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{backgroundColor: 'white'}}>
      <View style={styles.navTabWrapper}>
        <Button
          disabled={!userData ? true : false}
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_FILMS ? {fontWeight: 'bold'} : {},
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_FILMS);
          }}>
          Films
        </Button>
        <Button
          disabled={!userData ? true : false}
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_CINEMAS ? {fontWeight: 'bold'} : {},
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_CINEMAS);
          }}>
          Cinemas
        </Button>
      </View>

      {!userData ? (
        <View style={styles.signInContainer}>
          <Text>Please sign in</Text>
          <Button
            type="primary"
            onPress={() => navigation.navigate(AUTHORIZATION)}>
            LOG IN
          </Button>
        </View>
      ) : selectedTab === SELECTED_TAB_FILMS ? (
        <View style={styles.sectionContainer}>
          {userData.favouriteFilms &&
            userData.favouriteFilms.map((film, index) => (
              <TouchableHighlight
                style={styles.card}
                activeOpacity={0.5}
                key={index}
                underlayColor="white"
                onPress={() => {
                  getFilmCard(film.id);
                  navigation.navigate(FILM_CARD, {
                    name: film.name,
                    filmId: film.id,
                    userId: userData?.id,
                  });
                }}>
                <Image source={{uri: film.img}} style={styles.card} />
              </TouchableHighlight>
            ))}
          {!userData.favouriteFilms.length && (
            <Text style={styles.emptySection}>
              you don't have any favorite films
            </Text>
          )}
        </View>
      ) : (
        <View style={styles.sectionContainer}>
          {userData.favouriteCinemas &&
            userData.favouriteCinemas.map((cinema, index) => (
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
                    userId: userData?.id,
                  });
                }}>
                <Image source={{uri: cinema.img}} style={styles.card} />
              </TouchableHighlight>
            ))}
          {!userData.favouriteCinemas.length && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                you don't have any favorite cinemas
              </Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}
//enum

export default Favorites;
