import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import {STATE_INITIAL, STATE_LOADING} from 'app/enum/state.enum';
import {FILMS, FILM_CARD} from 'app/enum/navigation.enum';
import {
  CATEGORY_COMEDY,
  CATEGORY_BIOGRAPHY,
  CATEGORY_DRAMA,
  CATEGORY_RECENTLY_RELEASED,
} from 'app/enum/category.enum';

import {Text} from 'app/components/partial/Text';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyles} from '../Films/Films.styles';

function Films({
  state,
  loadAllFilms,
  loadNewFilms,
  films,
  page,
  totalPages,
  nextBatchState,
  navigation,
  getFilmCard,
  user,
  ts,
  styles,
}) {
  useEffect(() => {
    loadAllFilms();
  }, []);

  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={user ? 0.5 : 1}
      underlayColor={styles.screenBackground.backgroundColor}
      onPress={() => {
        if (user) {
          getFilmCard(item.id);
          navigation.navigate(FILM_CARD, {
            name: item.name,
            filmId: item.id,
            userId: user?.id,
            prevScreen: FILMS,
          });
        }
      }}>
      <Image source={{uri: item?.img}} style={styles.card} />
    </TouchableHighlight>
  );

  const sections = [
    {
      id: CATEGORY_RECENTLY_RELEASED,
      title: ts('recentlyReleased'),
    },
    {
      id: CATEGORY_COMEDY,
      title: ts('comedy'),
    },
    {
      id: CATEGORY_DRAMA,
      title: ts('drama'),
    },
    {
      id: CATEGORY_BIOGRAPHY,
      title: ts('biography'),
    },
  ];

  if (state === STATE_LOADING || state === STATE_INITIAL) {
    return (
      <ScrollView
        contentContainerStyle={styles.indicatorContainer}
        style={styles.screenBackground}>
        <ActivityIndicator size="small" color="black" />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.sectionContainer}>
        {sections.map(({id, title}) => (
          <View key={id} style={styles.sectionContainer}>
            <Text style={styles.category}>{title}</Text>
            <FlatList
              horizontal
              data={films[id]}
              renderItem={renderItem}
              ListEmptyComponent={
                <Text style={styles.emptySection}>Empty</Text>
              }
              ListFooterComponent={
                nextBatchState === STATE_LOADING && (
                  <ActivityIndicator size="small" color="black" />
                )
              }
              onEndReached={() => {
                if (page[id] < totalPages[id]) {
                  loadNewFilms({
                    page: page[id],
                    category: id,
                  });
                }
              }}
              onEndReachedThreshold={0}
              initialNumToRender={5}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default withTranslation('films')(withTheme(getStyles)(Films));
