import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {styles} from './Authorization.styles';
import {FAVORITES, REGISTRATION, TICKETS} from 'app/enum/navigation.enum';
import {ENGLISH} from 'app/enum/settings.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

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
  language,
  ts,
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
      <Text>{ts('Email')}</Text>
      <TextInput
        placeholder={ts('Email')}
        keyboardType="default"
        value={typedEmail}
        onChangeText={setTypedEmail}
      />
      <Text>{ts('Password')}</Text>
      <TextInput
        placeholder={ts('Password')}
        keyboardType="default"
        value={typedPassword}
        onChangeText={setTypedPassword}
      />
      <Button type="primary" onPress={onPressSignIn}>
        {ts('login')}
      </Button>
      <Text style={styles.error}>{errorText}</Text>
      <View style={styles.registerContainer}>
        <Text>{ts('Not registered yet? You can do it')}</Text>
        <Button type="textLink" onPress={onPressRegister}>
          {ts('here')}
        </Button>
      </View>
    </View>
  );
}

export default withTranslation('authorization')(Authorization);
