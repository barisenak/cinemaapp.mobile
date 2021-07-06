import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableHighlight, View} from 'react-native';
import {Button} from 'app/components/partial/Button';

import {ScrollView} from 'react-native-gesture-handler';
import {FILMS} from 'app/enum/navigation.enum';

import {styles} from '../Search/Search.styles';
import {TextInput} from 'app/components/partial/TextInput';

function Search({
  typedCinema,
  typedFilm,
  setTypedFilm,
  setTypedCinema,
  route,
  films,
  cinemas,
  onSearch,
  clearSearchedData,
  onPressSearchItem,
}) {
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="white"
      onPress={() => onPressSearchItem(item)}>
      <View style={styles.cardWrapper}>
        <Text>{item.name}</Text>
        <Image source={{uri: item.img}} style={styles.card} />
      </View>
    </TouchableHighlight>
  );

  useEffect(() => {
    return () => {
      clearSearchedData();
      setTypedFilm('');
      setTypedCinema('');
    };
  }, []);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      // keyboardDismissMode
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
      <Button type="primary" onPress={onSearch}>
        Search
      </Button>
      <View style={styles.listContainer}>
        {films.length ? (
          <FlatList
            data={films.length ? films : cinemas}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshing="true"
            ListEmptyComponent={
              <Text style={styles.emptySection}>{`no ${
                route.params.prevScreen === FILMS ? 'films' : 'cinemas'
              } founded`}</Text>
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
