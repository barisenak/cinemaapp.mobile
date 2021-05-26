import React from 'react';
import {View, Image, TouchableHighlight, FlatList} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from '../Favorites.styles';
import {CINEMA_CARD} from 'app/enum/navigation.enum';

function FavCinemas({navigation, favoriteCinemas}) {
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="white"
      onPress={() =>
        navigation.navigate(CINEMA_CARD, {
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
        data={favoriteCinemas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        ListEmptyComponent={
          <Text style={{marginTop: 250, color: 'grey'}}>
            you don't have any favorite cinemas
          </Text>
        }
      />
    </View>
  );
}

export default FavCinemas;
