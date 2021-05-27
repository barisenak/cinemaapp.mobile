import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {styles} from './Authorization.styles';
import {FAVORITES, REGISTRATION} from 'app/enum/navigation.enum';

function Authorization({
  navigation,
  setUserData,
  userData,
  typedEmail,
  setTypedEmail,
  typedPassword,
  setTypedPassword,
  errorText,
}) {
  useEffect(() => {
    if (userData) {
      navigation.navigate(FAVORITES);
    }
  });

  const signIn = () => {
    setUserData({email: typedEmail, password: typedPassword});
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
      <Button type="primary" onPress={signIn}>
        SIGN IN
      </Button>
      <Text style={styles.error}>{errorText}</Text>
      <View style={styles.registerContainer}>
        <Text>Not registered yet? You can do it</Text>
        <Button
          type="textLink"
          onPress={() => {
            setTypedPassword('');
            navigation.navigate(REGISTRATION);
          }}>
          here
        </Button>
      </View>
    </View>
  );
}

export default Authorization;
