import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  SectionList,
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

// REVIEW: Let's split this component into small pieces.
// So we can decrease JSX size and improve clarity.
// Also we can create a list of sections to reduce duplication:
//
// const sections = [
//   {
//     id: CATEGORY_RECENTLY_RELEASED,
//     title: ts('Recently released'),
//   },
//   ...
// ];
//
// ...
//
// sections.map(({id, title}) => (
//   <View key={id} style={styles.sectionContainer}>
//     <Text style={styles.category}>{title}</Text>
//     <FlatList
//       horizontal
//       data={films[CATEGORY_RECENTLY_RELEASED]}
//       renderItem={renderItem}
//       ...
//     />
//   </View>
// ));
//
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
    // REVIEW: Let's move this logic into `mergeProps`, provided by `connect`.
    // So from component level it looks like:
    //
    // loadAllFilms();
    //
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
        // REVIEW: Please refine this using `if` statement to improve clarity
        user &&
          (getFilmCard(item.id),
          navigation.navigate(FILM_CARD, {
            name: item.name,
            filmId: item.id,
            userId: user?.id,
            prevScreen: FILMS,
          }));
      }}>
      <Image source={{uri: item.img}} style={styles.card} />
    </TouchableHighlight>
  );

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
        <Text style={styles.category}>{ts('Recently released')}</Text>
        <FlatList
          data={films[CATEGORY_RECENTLY_RELEASED]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          // REVIEW: Why do we have this everywhere?
          refreshing="true"
          ListEmptyComponent={<Text style={styles.emptySection}>Empty</Text>}
          ListFooterComponent={
            nextBatchState === STATE_LOADING && (
              <ActivityIndicator size="small" color="black" />
            )
          }
          onEndReached={() => {
            // REVIEW: Please refine this using `if` statement to improve clarity
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
        <Text style={styles.category}>{ts('Comedy')}</Text>
        <FlatList
          data={films[CATEGORY_COMEDY]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          ListEmptyComponent={<Text style={styles.emptySection}>Empty</Text>}
          ListFooterComponent={
            nextBatchState === STATE_LOADING && (
              <ActivityIndicator size="small" color="black" />
            )
          }
          onEndReached={() => {
            // REVIEW: Please refine this using `if` statement to improve clarity
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
        <Text style={styles.category}>{ts('Drama')}</Text>
        <FlatList
          data={films[CATEGORY_DRAMA]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
        <Text style={styles.category}>{ts('Biography')}</Text>
        <FlatList
          data={films[CATEGORY_BIOGRAPHY]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
