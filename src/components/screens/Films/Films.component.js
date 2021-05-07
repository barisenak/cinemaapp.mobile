import React, {useEffect} from 'react';
import {View, FlatList, SectionList, Image} from 'react-native';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';

import {styles} from './Films.styles';

function Films({state, loadFilms, films}) {
  // useEffect(() => {
  //   console.log(films[4].img);
  // });

  const renderItem = ({item}) => (
    <View>
      <Image source={{uri: item.img}} style={{width: 110, height: 150}}></Image>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.category}>Recently released</Text>
      {films && (
        <FlatList
          data={films}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      <Text>{state}</Text>
      <Button type="default" onPress={loadFilms}>
        Get
      </Button>
      <Button type="primary">Primary</Button>
      <Button type="textLink">Text Link</Button>
    </View>
  );
}

export default Films;
