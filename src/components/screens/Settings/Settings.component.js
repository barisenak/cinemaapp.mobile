/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Linking, TouchableHighlight} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getBuildNumber, getVersion} from 'react-native-device-info';

import {getStyle} from '../Settings/Settings.styles';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';

import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

import {LANGUAGE} from 'app/enum/navigation.enum';

function Settings({onPressLogOut, language, styles, navigation, ts, user}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.settingsContainer}>
        <TouchableHighlight
          onPress={() => navigation.navigate(LANGUAGE)}
          underlayColor="#a3a3a3">
          <View style={styles.settingContainer}>
            <Text style={styles.text}>{ts('language')}</Text>
            <View style={styles.rightPropContainer}>
              <Text style={styles.text}>{language}</Text>
              <Button type="simple">❯</Button>
            </View>
          </View>
        </TouchableHighlight>
        {/* <View style={styles.settingContainer}>
          <Text style={styles.text}>{ts('pushNotifications')}</Text>
          <Button type="simple">❯</Button>
        </View> */}
        <TouchableHighlight
          underlayColor="#a3a3a3"
          onPress={() =>
            Linking.openURL('mailto:test@test.com').catch(err =>
              console.log(err),
            )
          }>
          <View style={styles.settingContainer}>
            <Text style={styles.text}>{ts('sendFeedback')}</Text>
            <Button type="simple">❯</Button>
          </View>
        </TouchableHighlight>
        <View style={styles.settingContainer}>
          <Text style={styles.text}>{ts('about')}</Text>
          <Text
            style={
              styles.text
            }>{`version ${getVersion()}, build ${getBuildNumber()}`}</Text>
        </View>
        {user ? (
          <TouchableHighlight onPress={onPressLogOut} underlayColor="#a3a3a3">
            <View style={styles.settingContainer}>
              <Text style={styles.text}>{ts('logOut')}</Text>
            </View>
          </TouchableHighlight>
        ) : null}
      </View>
    </ScrollView>
  );
}

export default withTranslation('settings')(withTheme(getStyle)(Settings));
