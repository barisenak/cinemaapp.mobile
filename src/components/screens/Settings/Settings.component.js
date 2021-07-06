/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../Settings/Settings.styles';
import {Button} from 'app/components/partial/Button';
import {ENGLISH} from 'app/enum/settings.enum';

function Settings({navigation, onPressLogOut, language}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.settingsContainer}>
        <Button type="primary" onPress={onPressLogOut}>
          {language === ENGLISH ? 'LOG OUT' : 'Выйти'}
        </Button>
      </View>
    </ScrollView>
  );
}

export default Settings;
