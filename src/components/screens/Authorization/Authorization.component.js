import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {getStyle} from './Authorization.styles';
import {FAVORITES, TICKETS} from 'app/enum/navigation.enum';
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
      <Text style={styles.text}> {ts('email')}</Text>
      <TextInput
        style={styles.input}
        placeholder={ts('email')}
        keyboardType="default"
        value={typedEmail}
        onChangeText={setTypedEmail}
      />
      <Text style={styles.text}>{ts('password')}</Text>
      <TextInput
        style={styles.input}
        placeholder={ts('password')}
        keyboardType="default"
        value={typedPassword}
        onChangeText={setTypedPassword}
      />
      <Button type="primary" onPress={onPressSignIn}>
        {ts('login')}
      </Button>
      <Text style={styles.error}>{errorText}</Text>
      <View style={styles.registerContainer}>
        <Text style={styles.text}>{ts('notRegistered')}</Text>
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
