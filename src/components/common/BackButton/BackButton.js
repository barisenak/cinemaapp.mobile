import React from 'react';
import {HeaderBackButton} from '@react-navigation/stack';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

import {FILMS, SEATS_CARD} from 'app/enum/navigation.enum';

function BackButton({route, navigation, ts}) {
  return (
    <HeaderBackButton
      label={
        route.params.prevScreen === SEATS_CARD
          ? ts(FILMS)
          : ts(route.params.prevScreen)
      }
      onPress={() => {
        if (route.params.prevScreen === SEATS_CARD) {
          navigation.navigate(FILMS);
        } else {
          navigation.navigate(route.params.prevScreen);
        }
      }}
    />
  );
}

export default withTranslation('floorMenu')(BackButton);
