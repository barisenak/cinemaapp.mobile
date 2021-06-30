import React, {useEffect} from 'react';
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
  }, [userData]);

  const signIn = () => {
    setUserData({email: typedEmail, password: typedPassword});
    // REVIEW: Why it should be in component?
    // We can move this reset effect to saga/reducer
    //
    // The same for {Registration} component
    //
    setTypedPassword('');
  };

  return (
    <View style={styles.signInContainer}>
      <Text>Email:</Text>
      <TextInput
        placeholder="Email"
        keyboardType="default"
        value={typedEmail}
        // REVIEW: Why we need this new inline function?
        // onChangeText={setTypedEmail}
        //
        // The same for {Registration} component
        //
        onChangeText={text => {
          setTypedEmail(text);
        }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        keyboardType="default"
        value={typedPassword}
        // REVIEW: Why we need this new inline function?
        // onChangeText={setTypedPassword}
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
            // REVIEW: Would be better to move this logic out of this inline statement.
            // For example, you can reset password value in {componentWillUnmount}
            //
            // https://reactjs.org/docs/hooks-effect.html#example-using-classes-1
            //
            // useEffect(() => {
            //   return () => {
            //     setTypedPassword('');
            //   };
            // }, []);
            //
            //
            // The same for {Registration} component
            //
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
