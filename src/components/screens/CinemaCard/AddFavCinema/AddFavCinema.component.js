import React from 'react';

import {TouchableOpacity} from 'react-native';

import {styles} from '../CinemaCard.styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AddFavCinema({navigation, options, addFavoriteCinema, user}) {
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

export default AddFavCinema;
