import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';

import {styles} from './Films.styles';

function Films({state, loadFilms}) {
  // useEffect(() => {
  //   dispatch(getFilms());
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.category}>Recently released</Text>
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
