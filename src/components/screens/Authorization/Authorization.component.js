import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {styles} from './Authorization.styles';

function Authorization({navigation, setUserData}) {
  const [typedEmail, setTypedEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');

  const signIn = () => {
    console.log(setUserData);
    setUserData({email: typedEmail, password: typedPassword});

    setTypedEmail('');
    setTypedPassword('');
  };

  return (
    <View style={styles.signInContainer}>
      <Text>Email:</Text>
      <TextInput
        placeholder="Email"
        keyboardType="default"
        style={styles.input}
        value={typedEmail}
        onChangeText={text => {
          setTypedEmail(text);
        }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        keyboardType="default"
        style={styles.input}
        value={typedPassword}
        onChangeText={text => {
          setTypedPassword(text);
        }}
      />
      <Button type="primary" onPress={signIn}>
        SIGN IN
      </Button>
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
