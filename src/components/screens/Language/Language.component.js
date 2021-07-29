/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';

import {View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {getStyle} from '../Settings/Settings.styles';
import {Button} from 'app/components/partial/Button';
import {ENGLISH, RUSSIAN} from 'app/enum/settings.enum';
import {Text} from 'app/components/partial/Text';

import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

function Language({onChangeLanguage, language, styles, ts}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.settingContainer}>
        <Text style={styles.text}>{ts('Language')}</Text>

        <View style={styles.buttonContainer}>
          <Button
            type={language === ENGLISH ? 'primary' : ''}
            onPress={useCallback(() => onChangeLanguage(ENGLISH), [])}>
            {ENGLISH}
          </Button>
          <Button
            type={language === ENGLISH ? '' : 'primary'}
            onPress={useCallback(() => onChangeLanguage(RUSSIAN), [])}>
            {RUSSIAN}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default withTranslation('settings')(withTheme(getStyle)(Language));
