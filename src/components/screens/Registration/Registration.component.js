import React from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {styles} from './Registration.styles';

function Registration({
  navigation,
  setRegisterData,
  setTypedPassword,
  setTypedEmail,
  typedEmail,
  typedPassword,
}) {
  const signUp = () => {
    setRegisterData({email: typedEmail, password: typedPassword});
    setTypedPassword('');
  };

  return (
    <View style={styles.signInContainer}>
      <Text>Email:</Text>
      <TextInput
        placeholder="Email"
        keyboardType="default"
        value={typedEmail}
        onChangeText={text => {
          setTypedEmail(text);
        }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        keyboardType="default"
        value={typedPassword}
        onChangeText={text => {
          setTypedPassword(text);
        }}
      />
      <Button type="primary" onPress={signUp}>
        SIGN UP
      </Button>
    </View>
  );
}

export default Registration;
