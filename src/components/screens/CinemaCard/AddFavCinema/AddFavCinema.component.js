import React from 'react';

import {TouchableOpacity} from 'react-native';

import {getStyles} from '../CinemaCard.styles';

// REVIEW: Let's put all external-library imports at the top of the file,
// and project related imports below, so we can separate external and internal modules.
// Like:
//
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
// import {withTheme} from 'app/providers/ThemeProvider/withTheme';
//
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
            // REVIEW: Let's use lodash.isEmpty
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
