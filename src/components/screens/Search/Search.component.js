import React from 'react';
import {FlatList, Image, Text, TouchableHighlight, View} from 'react-native';
import {Button} from 'app/components/partial/Button';

import {ScrollView} from 'react-native-gesture-handler';
import {FILMS, FILM_CARD} from 'app/enum/navigation.enum';

import {styles} from '../Search/Search.styles';
import {TextInput} from 'app/components/partial/TextInput';

function Search({
  navigation,
  typedCinema,
  typedFilm,
  setTypedFilm,
  setTypedCinema,
  route,
  makeSearch,
  films,
  cinemas,
}) {
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="white"
      //   onPress={() => {
      //     getFilmCard(item.id),
      //       navigation.navigate(FILM_CARD, {
      //         name: item.name,
      //         filmId: item.id,
      //         userId: user?.id,
      //       });
      //   }}>
    >
      <View style={styles.cardWrapper}>
        <Text>{item.name}</Text>
        <Image source={{uri: item.img}} style={styles.card} />
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <TextInput
        placeholder={
          route.params.prevScreen === FILMS
            ? 'type film you want to search'
            : 'type cinema you want to search'
        }
        keyboardType="default"
        value={route.params.prevScreen === FILMS ? typedFilm : typedCinema}
        onChangeText={text => {
          route.params.prevScreen === FILMS
            ? setTypedFilm(text)
            : setTypedCinema(text);
        }}
      />
      <Button
        type="primary"
        onPress={() => {
          route.params.prevScreen === FILMS
            ? makeSearch({film: typedFilm})
            : makeSearch({film: typedCinema});
        }}>
        Search
      </Button>
      <View style={styles.listContainer}>
        {films ? (
          <FlatList
            data={films}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshing="true"
            ListEmptyComponent={
              typedFilm !== '' && (
                <Text style={styles.emptySection}>no films founded</Text>
              )
            }
            // onEndReached={() => {
            //   page[CATEGORY_RECENTLY_RELEASED] <
            //     totalPages[CATEGORY_RECENTLY_RELEASED] &&
            //     loadNewFilms({
            //       page: page[CATEGORY_RECENTLY_RELEASED],
            //       category: CATEGORY_RECENTLY_RELEASED,
            //     });
            // }}
            // onEndReachedThreshold={0}
            // initialNumToRender={5}
          />
        ) : null}
      </View>
    </ScrollView>
  );
}

export default Search;
