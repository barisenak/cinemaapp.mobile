import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {styles} from './Registration.styles';
import {AUTHORIZATION, FAVORITES, TICKETS} from 'app/enum/navigation.enum';

function Registration({
  navigation,
  route,
  setRegisterData,
  setTypedPassword,
  setTypedEmail,
  typedEmail,
  typedPassword,
  userData,
  errorText,
  onPressSignUp,
}) {
  useEffect(() => {
    if (userData) {
      route.params.prevScreen === FAVORITES
        ? navigation.navigate(FAVORITES)
        : navigation.navigate(TICKETS);
    }
  }, [userData]);

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
      <Button type="primary" onPress={onPressSignUp}>
        SIGN UP
      </Button>
      <Text style={styles.error}>{errorText}</Text>
    </View>
  );
}

export default Registration;
