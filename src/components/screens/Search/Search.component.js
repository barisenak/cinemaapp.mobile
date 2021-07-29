import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableHighlight, View} from 'react-native';
import {Button} from 'app/components/partial/Button';

import {ScrollView} from 'react-native-gesture-handler';
import {FILMS} from 'app/enum/navigation.enum';

import {TextInput} from 'app/components/partial/TextInput';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {getStyle} from './Search.styles';

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
  styles,
}) {
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={styles.container.screenBackground}
      onPress={() => onPressSearchItem(item)}>
      <View style={styles.cardWrapper}>
        <Text>{item.name}</Text>
        <Image source={{uri: item.img}} style={styles.card} />
      </View>
    </TouchableHighlight>
  );

  useEffect(() => {
    clearSearchedData();
    setTypedFilm('');
    setTypedCinema('');
  }, []);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <TextInput
        style={styles.input}
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
          // REVIEW: Remove
          refreshing="true"
        />
      </View>
    </ScrollView>
  );
}

export default withTranslation('search')(withTheme(getStyle)(Search));
