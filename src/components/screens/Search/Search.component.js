import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableHighlight, View} from 'react-native';
import {Button} from 'app/components/partial/Button';

import {ScrollView} from 'react-native-gesture-handler';
import {FILMS} from 'app/enum/navigation.enum';

import {styles} from '../Search/Search.styles';
import {TextInput} from 'app/components/partial/TextInput';
import {ENGLISH} from 'app/enum/settings.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

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
  ts,
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
            ? ts('type film you want to search')
            : ts('type cinema you want to search')
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
        {ts('Search')}
      </Button>
      <View style={styles.listContainer}>
        <FlatList
          data={films.length ? films : cinemas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing="true"
          ListEmptyComponent={
            <Text style={styles.emptySection}>{ts('no results')}</Text>
          }
        />
      </View>
    </ScrollView>
  );
}

export default withTranslation('search')(Search);
