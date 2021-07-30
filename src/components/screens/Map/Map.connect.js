import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  locationSelector,
  cinemasSelector,
  markersSelector,
  citySelector,
} from 'app/redux/map/map.selector';
import {userDataSelector} from 'app/redux/user/user.selector';

import {getAllCinemas, getLocation, putMarkers} from 'app/redux/map/map.action';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';

import Map from './Map.component';

import {CINEMA_CARD, MAP} from 'app/enum/navigation.enum';

export default connect(
  createStructuredSelector({
    location: locationSelector,
    cinemas: cinemasSelector,
    user: userDataSelector,
    markers: markersSelector,
    city: citySelector,
  }),
  {
    getLocation,
    getAllCinemas,
    getCinemaCard,
    putMarkers,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      onPressPoint: marker => {
        dispatchProps.getCinemaCard(marker.id);
        ownProps.navigation.navigate(CINEMA_CARD, {
          name: marker.name,
          cinemaId: marker.id,
          prevScreen: MAP,
        });
      },
    };
  },
)(Map);
