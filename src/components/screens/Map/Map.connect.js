import {connect} from 'react-redux';

import {
  locationSelector,
  cinemasSelector,
  markersSelector,
  citySelector,
} from 'app/redux/map/map.selector';
import {getAllCinemas, getLocation, putMarkers} from 'app/redux/map/map.action';
import Map from './Map.component';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {CINEMA_CARD, MAP} from 'app/enum/navigation.enum';
import {userDataSelector} from 'app/redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

export default connect(
  createStructuredSelector({
    location: locationSelector,
    cinemas: cinemasSelector,
    user: userDataSelector,
    markers: markersSelector,
    city: citySelector,
  }),
  {
    getLocation: getLocation,
    getAllCinemas: getAllCinemas,
    getCinemaCard: getCinemaCard,
    putMarkers: putMarkers,
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
