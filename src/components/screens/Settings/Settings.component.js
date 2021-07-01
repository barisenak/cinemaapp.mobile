/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../Settings/Settings.styles';
import {Button} from 'app/components/partial/Button';

function Settings({navigation, onPressLogOut}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.settingsContainer}>
        <View style={styles.btnContainer}>
          <Button type="primary" onPress={onPressLogOut}>
            LOG OUT
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default Settings;
