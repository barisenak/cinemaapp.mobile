/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {blue} from 'app/styles/colors.style';
import {
  SELECTED_TAB_CINEMAS,
  SELECTED_TAB_FILMS,
} from 'app/enum/favorites.enum';
import {styles} from 'app/components/screens/Favorites/Favorites.styles';
import {Button} from 'app/components/partial/Button';

function Favorites({
  navigation,
  selectedTab,
  setSelectedTab,
  isLoggedIn,
  setUser,
}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          textAlign: 'center',
        }}>
        <Button
          disabled={!isLoggedIn ? true : false}
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_FILMS ? {fontWeight: 'bold'} : {},
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_FILMS);
          }}>
          Films
        </Button>
        <Button
          disabled={!isLoggedIn ? true : false}
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_CINEMAS ? {fontWeight: 'bold'} : {},
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_CINEMAS);
          }}>
          Cinemas
        </Button>
      </View>
      {!isLoggedIn && (
        <View style={styles.signInContainer}>
          <Text>Please sign in</Text>
          <Button
            type="primary"
            style={styles.button}
            onPress={() => navigation.navigate('Authorization')}>
            LOG IN
          </Button>
        </View>
      )}
    </ScrollView>
  );
}
//styles
//log out

export default Favorites;
