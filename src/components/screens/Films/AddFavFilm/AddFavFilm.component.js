import React from 'react';

import {TouchableOpacity} from 'react-native';

import {styles} from '../Films.styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AddFavFilm({navigation, options, addFavoriteFilm, user}) {
  return (
    <TouchableOpacity
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

export default AddFavFilm;