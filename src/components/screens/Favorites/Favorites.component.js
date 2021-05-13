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
      <View>
        {!isLoggedIn && <Text>Please sign in</Text>}
        <Button
          type="primary"
          onPress={() => {
            setUser(true);
            console.log(isLoggedIn);
          }}>
          LOG IN
        </Button>
        <Button
          type="primary"
          onPress={() => {
            setUser(false);
            console.log(isLoggedIn);
          }}>
          LOG OUT
        </Button>
      </View>
    </ScrollView>
  );
}

export default Favorites;
