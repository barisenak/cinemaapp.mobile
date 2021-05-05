/* eslint-disable react-native/no-inline-styles */
import {Text, Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {styles} from './Films.styles';
import {getFilms} from '../../../redux/films/films.action';

function Films({navigation}) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getFilms());
  // });

  const get = () => {
    dispatch(getFilms());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.category}>Recently released</Text>
      <Button onPress={get} title="Get"></Button>
    </View>
  );
}

export default Films;
