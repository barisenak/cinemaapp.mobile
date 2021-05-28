import React, {useEffect} from 'react';

import {TouchableOpacity} from 'react-native';

import {styles} from '../Films/Films.styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AddFavFilm({navigation, options, addFavoriteFilm, user}) {
  // useEffect(() => {}, [user.favouriteFilms]);
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
            user.favouriteFilms.includes(options.filmId) ? '#FFCF09' : '#A19DAE'
          }
          size={30}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

export default AddFavFilm;
