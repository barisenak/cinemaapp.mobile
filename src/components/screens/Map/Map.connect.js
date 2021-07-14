import {connect} from 'react-redux';

import {
  locationSelector,
  cinemasSelector,
  markersSelector,
} from 'app/redux/map/map.selector';
import {getAllCinemas, getLocation, putMarkers} from 'app/redux/map/map.action';
import Map from './Map.component';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {CINEMA_CARD, MAP} from 'app/enum/navigation.enum';
import {userDataSelector} from 'app/redux/user/user.selector';

export default connect(
  st => ({
    location: locationSelector(st),
    cinemas: cinemasSelector(st),
    user: userDataSelector(st),
    markers: markersSelector(st),
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
