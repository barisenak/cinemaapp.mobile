/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import {
  SELECTED_TAB_CINEMAS,
  SELECTED_TAB_FILMS,
} from 'app/enum/favorites.enum';

import {styles} from 'app/components/screens/Favorites/Favorites.styles';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';
import {
  AUTHORIZATION,
  FILM_CARD,
  CINEMA_CARD,
  FAVORITES,
} from 'app/enum/navigation.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

function Favorites({
  navigation,
  selectedTab,
  setSelectedTab,
  userData,
  getFilmCard,
  getCinemaCard,
  ts,
}) {
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        style={styles.card}
        activeOpacity={0.5}
        key={item.id}
        underlayColor="white"
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
        <Image source={{uri: item.img}} style={styles.card} />
      </TouchableHighlight>
    );
  };

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
          {ts('Films')}
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
          {ts('Cinemas')}
        </Button>
      </View>

      {!userData ? (
        <View style={styles.signInContainer}>
          <Text> {ts('Please sign in')}</Text>
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
              contentContainerStyle={styles.cardsContainer}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={3}
              horizontal={false}
              refreshing="true"
            />
          )}
          {!userData.favouriteFilms.length && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {ts("you don't have any favorite films")}
              </Text>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.sectionContainer}>
          {userData.favouriteCinemas && (
            <FlatList
              data={userData.favouriteCinemas}
              contentContainerStyle={styles.cardsContainer}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={3}
              horizontal={false}
              refreshing="true"
            />
          )}
          {!userData.favouriteCinemas.length && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {ts("you don't have any favorite cinemas")}
              </Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

export default withTranslation('favorites')(Favorites);
