import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {getStyle} from './Authorization.styles';
import {FAVORITES, REGISTRATION, TICKETS} from 'app/enum/navigation.enum';
import {ENGLISH} from 'app/enum/settings.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

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
  styles,
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
      <Text style={styles.text}> {ts('Email')}</Text>
      <TextInput
        style={styles.input}
        placeholder={ts('Email')}
        keyboardType="default"
        value={typedEmail}
        onChangeText={setTypedEmail}
      />
      <Text style={styles.text}>{ts('Password')}</Text>
      <TextInput
        style={styles.input}
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
        <Text style={styles.text}>
          {ts('Not registered yet? You can do it')}
        </Text>
        <Button type="primary" onPress={onPressRegister}>
          {ts('here')}
        </Button>
      </View>
    </View>
  );
}

export default withTranslation('authorization')(
  withTheme(getStyle)(Authorization),
);
