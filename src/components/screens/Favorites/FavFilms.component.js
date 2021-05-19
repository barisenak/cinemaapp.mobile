import React from 'react';
import {View, Image, TouchableHighlight, FlatList} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from './Favorites.styles';

function FavFilms({navigation, favoriteFilms}) {
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="white"
      onPress={() =>
        navigation.navigate('CinemaCard', {
          name: item.name,
          image: item.img,
        })
      }>
      <Image source={{uri: item.img}} style={styles.card} />
    </TouchableHighlight>
  );

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={favoriteFilms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        ListEmptyComponent={
          <Text style={{marginTop: 250, color: 'grey'}}>
            you don't have any favorite films
          </Text>
        }
      />
    </View>
  );
}

export default FavFilms;
