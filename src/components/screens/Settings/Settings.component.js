/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../Settings/Settings.styles';
import {Button} from 'app/components/partial/Button';
import {ENGLISH, RUSSIAN} from 'app/enum/settings.enum';
import {Text} from 'app/components/partial/Text';

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

// 1.4 Handle marker (cluster) press (Yandex.Transport)

// 1.6 *Animate bottom view (React Native Animated API)

// 2.1 Appearance (dark/light) Switcher
// 2.2 Date format
// 2.3 Language

// 2.5 *Push Notification (react-native-firebase)
// 3. Analytics (react-native-firebase)

// 4. Explore React Native Animations, AppState, FlatList
