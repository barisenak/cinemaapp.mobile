import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from './Map.connect';

import {getStyles} from '../Map/Map.styles';

import {MAP, SEARCH} from 'app/enum/navigation.enum';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

const Stack = createStackNavigator();

function MapNavigator({navigation, ts, styles}) {
  return (
    <Stack.Navigator initialRouteName={MAP}>
      <Stack.Screen
        name={MAP}
        component={Map}
        options={{
          headerTitle: ts(MAP),
          headerTitleStyle: {
            color: styles.text.color,
          },
          headerStyle: {backgroundColor: styles.container.backgroundColor},

          headerRight: () => (
            <MaterialCommunityIcons
              name="magnify"
              color="grey"
              size={30}
              style={styles.icon}
              onPress={() => navigation.navigate(SEARCH, {prevScreen: MAP})}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(withTheme(getStyles)(MapNavigator));
