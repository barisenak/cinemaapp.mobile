/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, ScrollView} from 'react-native';

import {
  SELECTED_TAB_CINEMAS,
  SELECTED_TAB_FILMS,
} from 'app/enum/favorites.enum';

import {styles} from 'app/components/screens/Favorites/Favorites.styles';

import {Button} from 'app/components/partial/Button';
import FavFilms from './FavFilms/FavFilms.component';
import FavCinemas from './FavCinemas/FavCinemas.component';
import {Text} from 'app/components/partial/Text';
import {AUTHORIZATION} from 'app/enum/navigation.enum';

function Favorites({navigation, selectedTab, setSelectedTab, isLoggedIn}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{backgroundColor: 'white'}}>
      <Text>{isLoggedIn}</Text>
      <View style={styles.navTabWrapper}>
        <Button
          disabled={!isLoggedIn ? true : false}
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
          disabled={!isLoggedIn ? true : false}
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
      {!isLoggedIn ? (
        <View style={styles.signInContainer}>
          <Text>Please sign in</Text>
          <Button
            type="primary"
            style={styles.button}
            onPress={() => navigation.navigate(AUTHORIZATION)}>
            LOG IN
          </Button>
        </View>
      ) : selectedTab === SELECTED_TAB_FILMS ? (
        <FavFilms />
      ) : (
        <FavCinemas />
      )}
    </ScrollView>
  );
}
//enum

export default Favorites;
