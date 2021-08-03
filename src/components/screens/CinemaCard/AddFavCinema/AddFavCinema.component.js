import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {getStyles} from '../CinemaCard.styles';

import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import isEmpty from 'lodash/isEmpty';

function AddFavCinema({options, addFavoriteCinema, user, styles}) {
  return (
    <TouchableOpacity
      onPress={() => {
        addFavoriteCinema({
          cinemaId: options.cinemaId,
          userId: options.userId,
        });
      }}>
      {user && (
        <MaterialCommunityIcons
          name="star"
          color={
            isEmpty(
              user.favouriteCinemas.filter(el => el.id === options.cinemaId),
            )
              ? '#A19DAE'
              : '#FFCF09'
          }
          size={30}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

export default withTheme(getStyles)(AddFavCinema);
