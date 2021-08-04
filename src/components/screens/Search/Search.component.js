import React, {useEffect} from 'react';
import {FlatList, Image, TouchableHighlight, View} from 'react-native';

import {TextInput} from 'app/components/partial/TextInput';
import {Button} from 'app/components/partial/Button';

import {FILMS} from 'app/enum/navigation.enum';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyle} from './Search.styles';
import {Text} from 'app/components/partial/Text';

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
  user,
}) {
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={styles.screenBackground.backgroundColor}
      onPress={() => onPressSearchItem(item)}>
      <View style={styles.cardWrapper}>
        <Text>{item.name}</Text>
        <Image source={{uri: item?.img}} style={styles.card} />
      </View>
    </TouchableHighlight>
  );

  useEffect(() => {
    clearSearchedData();
    setTypedFilm('');
    setTypedCinema('');
  }, []);

  if (!user) {
    return (
      <View style={styles.screenBackground}>
        <Text style={styles.text}>{ts('youNotLogged')}</Text>
      </View>
    );
  }

  return (
    <View keyboardShouldPersistTaps="handled" style={styles.screenBackground}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder={
            route.params.prevScreen === FILMS
              ? ts('typeFilm')
              : ts('typeCinema')
          }
          keyboardType="default"
          value={route.params.prevScreen === FILMS ? typedFilm : typedCinema}
          onChangeText={text => {
            route.params.prevScreen === FILMS
              ? setTypedFilm(text)
              : setTypedCinema(text);
          }}
        />
        <Button type="forSearch" onPress={onSearch}>
          {ts('search')}
        </Button>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={films.length ? films : cinemas}
          renderItem={renderItem}
          style={styles.flatList}
        />
      </View>
    </View>
  );
}

export default withTranslation('search')(withTheme(getStyle)(Search));
