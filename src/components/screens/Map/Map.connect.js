import {connect} from 'react-redux';

import {locationSelector, cinemasSelector} from 'app/redux/map/map.selector';
import {getAllCinemas, setLocation} from 'app/redux/map/map.action';
import Map from './Map.component';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {CINEMA_CARD} from 'app/enum/navigation.enum';

export default connect(
  st => ({
    location: locationSelector(st),
    cinemas: cinemasSelector(st),
  }),
  {
    setLocation: setLocation,
    getAllCinemas: getAllCinemas,
    getCinemaCard: getCinemaCard,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      onPressPoint: marker => {
        dispatchProps.getCinemaCard(marker.id);
        ownProps.navigation.navigate(CINEMA_CARD, {name: marker.name});
      },
    };
  },
)(Map);
