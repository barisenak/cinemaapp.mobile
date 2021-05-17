import React from 'react';
import {View, TextInput} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {styles} from './Registration.styles';

function Registration({navigation, loadFilms, films}) {
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
      <Button type="primary">SIGN UP</Button>
    </View>
  );
}

export default Registration;
