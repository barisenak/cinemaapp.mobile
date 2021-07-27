import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import React from 'react';

import {TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getStyles} from '../Films.styles';

function AddFavFilm({options, addFavoriteFilm, user, styles}) {
  return (
    <TouchableOpacity
      hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
      // pressRetentionOffset={{top: r}}
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
            user.favouriteFilms.filter(el => el.id === options.filmId).length
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

export default withTheme(getStyles)(AddFavFilm);
