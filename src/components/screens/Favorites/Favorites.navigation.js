import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {FAVORITES} from 'app/enum/navigation.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {getStyles} from './Favorites.styles';

const Stack = createStackNavigator();

function FavoritesNavigator({navigation, ts, styles}) {
  return (
    <Stack.Navigator initialRouteName={FAVORITES}>
      <Stack.Screen
        name={FAVORITES}
        component={Favorites}
        options={{
          headerTitle: ts(FAVORITES),
          headerTitleStyle: {
            color: styles.text.color,
          },
          headerStyle: {backgroundColor: styles.container.backgroundColor},
        }}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(
  withTheme(getStyles)(FavoritesNavigator),
);
