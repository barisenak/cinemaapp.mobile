/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Linking} from 'react-native';

import {View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {getStyle} from '../Settings/Settings.styles';
import {Button} from 'app/components/partial/Button';
import {ENGLISH, RUSSIAN} from 'app/enum/settings.enum';
import {Text} from 'app/components/partial/Text';

import {getBuildNumber, getVersion} from 'react-native-device-info';
import {DARK, LIGHT} from 'app/enum/theme.enum';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function Settings({
  onPressLogOut,
  onChangeLanguage,
  language,
  theme,
  onChangeTheme,
  styles,
}) {
  console.tron(styles);
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.settingsContainer}>
        <View style={styles.switcherContainer}>
          <Text style={styles.text}>Language</Text>
          <View style={styles.buttonContainer}>
            <Button
              type={language === ENGLISH ? 'primary' : ''}
              onPress={() => onChangeLanguage(ENGLISH)}>
              {ENGLISH}
            </Button>
            <Button
              type={language === ENGLISH ? '' : 'primary'}
              onPress={() => onChangeLanguage(RUSSIAN)}>
              {RUSSIAN}
            </Button>
          </View>
        </View>

        <View style={styles.switcherContainer}>
          <Text style={styles.text}>Theme</Text>
          <View style={styles.buttonContainer}>
            <Button
              type={theme === DARK ? 'primary' : ''}
              onPress={() => onChangeTheme(DARK)}>
              Dark
            </Button>
            <Button
              type={theme === DARK ? '' : 'primary'}
              onPress={() => onChangeTheme(LIGHT)}>
              Light
            </Button>
          </View>
        </View>

        <Button type="primary" onPress={onPressLogOut}>
          {language === ENGLISH ? 'LOG OUT' : 'Выйти'}
        </Button>
        <Text
          style={
            styles.text
          }>{`version ${getVersion()} build ${getBuildNumber()}`}</Text>
        <Button
          onPress={() => Linking.openURL('mailto:test@test.com')}
          title="www.google.co.in"
        />
      </View>
    </ScrollView>
  );
}

export default withTheme(getStyle)(Settings);
