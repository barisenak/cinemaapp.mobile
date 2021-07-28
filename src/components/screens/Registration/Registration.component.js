import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {Button} from 'app/components/partial/Button';

import {TextInput} from 'app/components/partial/TextInput';

import {getStyle} from './Registration.styles';
import {FAVORITES, TICKETS} from 'app/enum/navigation.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

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

  return (
    <View style={styles.signInContainer}>
      <Text style={styles.text}>{ts('Email')}</Text>
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
      <Button type="primary" onPress={onPressSignUp}>
        {ts('sign up')}
      </Button>
      <Text style={styles.error}>{errorText}</Text>
    </View>
  );
}

export default withTranslation('registration')(
  withTheme(getStyle)(Registration),
);
