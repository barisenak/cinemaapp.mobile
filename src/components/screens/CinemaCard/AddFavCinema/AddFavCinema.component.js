import React from 'react';

import {TouchableOpacity} from 'react-native';

import {getStyles} from '../CinemaCard.styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function AddFavCinema({navigation, options, addFavoriteCinema, user, styles}) {
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
            user.favouriteCinemas.filter(el => el.id === options.cinemaId)
              .length
              ? '#FFCF09'
              : '#A19DAE'
          }
          size={30}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

export default withTheme(getStyles)(AddFavCinema);
