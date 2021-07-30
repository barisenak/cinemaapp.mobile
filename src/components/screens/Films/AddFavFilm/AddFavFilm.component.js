import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import isEmpty from 'lodash/isEmpty';

import {getStyles} from '../Films.styles';

import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function AddFavFilm({options, addFavoriteFilm, user, styles}) {
  return (
    <TouchableOpacity
      hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
      onPress={() => {
        addFavoriteFilm({
          filmId: options.filmId,
          userId: options.userId,
        });
      }}>
      {user && (
        <MaterialCommunityIcons
          name="star"
          color={
            isEmpty(user.favouriteFilms.filter(el => el.id === options.filmId))
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

export default withTheme(getStyles)(AddFavFilm);
