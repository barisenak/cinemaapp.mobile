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

import {Text} from 'app/components/partial/Text';

import {
  CATEGORY_COMEDY,
  CATEGORY_BIOGRAPHY,
  CATEGORY_DRAMA,
  CATEGORY_RECENTLY_RELEASED,
} from 'app/enum/category.enum';
import {FILMS, FILM_CARD} from 'app/enum/navigation.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {getStyles} from '../Films/Films.styles';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function Films({
  state,
  loadFilms,
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
    loadFilms({
      page: page[CATEGORY_RECENTLY_RELEASED],
      category: CATEGORY_RECENTLY_RELEASED,
    });
    loadFilms({
      page: page[CATEGORY_COMEDY],
      category: CATEGORY_COMEDY,
    });
    loadFilms({
      page: page[CATEGORY_DRAMA],
      category: CATEGORY_DRAMA,
    });
    loadFilms({
      page: page[CATEGORY_BIOGRAPHY],
      category: CATEGORY_BIOGRAPHY,
    });
  }, []);

  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={user ? 0.5 : 1}
      underlayColor={styles.screenBackground.backgroundColor}
      onPress={() => {
        user &&
          (getFilmCard(item.id),
          navigation.navigate(FILM_CARD, {
            name: item.name,
            filmId: item.id,
            userId: user?.id,
            prevScreen: FILMS,
          }));
      }}>
      <Image source={{uri: item?.img}} style={styles.card} />
    </TouchableHighlight>
  );

  if (state === STATE_LOADING || state === STATE_INITIAL)
    return (
      <ScrollView
        contentContainerStyle={styles.indicatorContainer}
        style={styles.screenBackground}>
        <ActivityIndicator size="small" color="black" />
      </ScrollView>
    );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.sectionContainer}>
        <Text style={styles.category}>{ts('recentlyReleased')}</Text>
        <FlatList
          data={films[CATEGORY_RECENTLY_RELEASED]}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          horizontal
          ListEmptyComponent={<Text style={styles.emptySection}>Empty</Text>}
          ListFooterComponent={
            nextBatchState === STATE_LOADING && (
              <ActivityIndicator size="small" color="black" />
            )
          }
          onEndReached={() => {
            page[CATEGORY_RECENTLY_RELEASED] <
              totalPages[CATEGORY_RECENTLY_RELEASED] &&
              loadNewFilms({
                page: page[CATEGORY_RECENTLY_RELEASED],
                category: CATEGORY_RECENTLY_RELEASED,
              });
          }}
          onEndReachedThreshold={0}
          initialNumToRender={5}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.category}>{ts('comedy')}</Text>
        <FlatList
          data={films[CATEGORY_COMEDY]}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          horizontal
          ListEmptyComponent={<Text style={styles.emptySection}>Empty</Text>}
          ListFooterComponent={
            nextBatchState === STATE_LOADING && (
              <ActivityIndicator size="small" color="black" />
            )
          }
          onEndReached={() => {
            page[CATEGORY_COMEDY] < totalPages[CATEGORY_COMEDY] &&
              loadNewFilms({
                page: page[CATEGORY_COMEDY],
                category: CATEGORY_COMEDY,
              });
          }}
          onEndReachedThreshold={0}
          initialNumToRender={5}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.category}>{ts('drama')}</Text>
        <FlatList
          data={films[CATEGORY_DRAMA]}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          horizontal
          ListEmptyComponent={<Text style={styles.emptySection}>Empty</Text>}
          ListFooterComponent={
            nextBatchState === STATE_LOADING && (
              <ActivityIndicator size="small" color="black" />
            )
          }
          onEndReached={() => {
            page[CATEGORY_DRAMA] < totalPages[CATEGORY_DRAMA] &&
              loadNewFilms({
                page: page[CATEGORY_DRAMA],
                category: CATEGORY_DRAMA,
              });
          }}
          onEndReachedThreshold={0}
          initialNumToRender={5}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.category}>{ts('biography')}</Text>
        <FlatList
          data={films[CATEGORY_BIOGRAPHY]}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          horizontal
          ListEmptyComponent={<Text style={styles.emptySection}>Empty</Text>}
          ListFooterComponent={
            nextBatchState === STATE_LOADING && (
              <ActivityIndicator size="small" color="black" />
            )
          }
          onEndReached={() => {
            page[CATEGORY_BIOGRAPHY] < totalPages[CATEGORY_BIOGRAPHY] &&
              loadNewFilms({
                page: page[CATEGORY_BIOGRAPHY],
                category: CATEGORY_BIOGRAPHY,
              });
          }}
          onEndReachedThreshold={0}
          initialNumToRender={5}
        />
      </View>
    </ScrollView>
  );
}

export default withTranslation('films')(withTheme(getStyles)(Films));
