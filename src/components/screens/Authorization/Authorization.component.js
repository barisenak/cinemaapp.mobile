import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {styles} from './Authorization.styles';
import {FAVORITES, REGISTRATION, TICKETS} from 'app/enum/navigation.enum';

function Authorization({
  route,
  navigation,
  userData,
  typedEmail,
  setTypedEmail,
  typedPassword,
  setTypedPassword,
  errorText,
  onPressRegister,
  onPressSignIn,
}) {
  useEffect(() => {
    if (userData) {
      route.params.prevScreen === FAVORITES
        ? navigation.navigate(FAVORITES)
        : navigation.navigate(TICKETS);
    }
  }, [userData]);

  useEffect(() => {
    return () => {
      setTypedPassword('');
    };
  }, []);

  return (
    <View style={styles.signInContainer}>
      <Text>Email:</Text>
      <TextInput
        placeholder="Email"
        keyboardType="default"
        value={typedEmail}
        onChangeText={setTypedEmail}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        keyboardType="default"
        value={typedPassword}
        onChangeText={setTypedPassword}
      />
      <Button type="primary" onPress={onPressSignIn}>
        SIGN IN
      </Button>
      <Text style={styles.error}>{errorText}</Text>
      <View style={styles.registerContainer}>
        <Text>Not registered yet? You can do it</Text>
        <Button type="textLink" onPress={onPressRegister}>
          here
        </Button>
      </View>
    </View>
  );
}

export default Authorization;
