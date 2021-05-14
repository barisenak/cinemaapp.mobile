import React from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {styles} from './Authorization.styles';

function Authorization({navigation, loadFilms, films}) {
  return (
    <View style={styles.signInContainer}>
      <Text>Email:</Text>
      <TextInput
        placeholder="Email"
        keyboardType="default"
        style={styles.input}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        keyboardType="default"
        style={styles.input}
      />
      <Button type="primary">SIGN IN</Button>
      <View style={styles.registerContainer}>
        <Text>Not registered yet? You can do it</Text>
        <Button
          type="textLink"
          onPress={() => navigation.navigate('Registration')}>
          here
        </Button>
      </View>
    </View>
  );
}

export default Authorization;
