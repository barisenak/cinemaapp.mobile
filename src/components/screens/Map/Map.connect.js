import {connect} from 'react-redux';

import {locationSelector, cinemasSelector} from 'app/redux/map/map.selector';
import {getAllCinemas, setLocation} from 'app/redux/map/map.action';
import Map from './Map.component';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {CINEMA_CARD} from 'app/enum/navigation.enum';
import {userDataSelector} from 'app/redux/user/user.selector';

export default connect(
  st => ({
    location: locationSelector(st),
    cinemas: cinemasSelector(st),
    user: userDataSelector(st),
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
