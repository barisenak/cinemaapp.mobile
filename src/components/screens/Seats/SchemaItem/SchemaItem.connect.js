import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  cinemaCardSelector,
  choosenTimeSelector,
  timeSelector,
  selectedSeatsSelector,
} from 'app/redux/cinema/cinema.selector';
import {bookedSeatsSelector} from 'app/redux/booking/booking.selector';

import {
  removeSelectedSeat,
  setSelectedSeat,
} from 'app/redux/cinema/cinema.action';

import SchemaItem from './SchemaItem.component';

export default connect(
  createStructuredSelector({
    cinema: cinemaCardSelector,
    time: timeSelector,
    choosenTime: choosenTimeSelector,
    bookedSeats: bookedSeatsSelector,
    selectedSeats: selectedSeatsSelector,
  }),
  {
    setSelectedSeat,
    removeSelectedSeat,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
    };
  },
)(SchemaItem);
