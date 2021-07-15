/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../Settings/Settings.styles';
import {Button} from 'app/components/partial/Button';
import {ENGLISH, RUSSIAN} from 'app/enum/settings.enum';
import {Text} from 'app/components/partial/Text';

import analytics from '@react-native-firebase/analytics';
import {firebase} from '@react-native-firebase/analytics';

import {
  getApplicationName,
  getBuildId,
  getBuildNumber,
  getVersion,
} from 'react-native-device-info';

function Settings({navigation, onPressLogOut, onChangeLanguage, language}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.settingsContainer}>
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>Language</Text>
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

        <Button type="primary" onPress={onPressLogOut}>
          {language === ENGLISH ? 'LOG OUT' : 'Выйти'}
        </Button>
        <Text>{`version ${getVersion()} build ${getBuildNumber()}`}</Text>
      </View>
    </ScrollView>
  );
}

export default Settings;
