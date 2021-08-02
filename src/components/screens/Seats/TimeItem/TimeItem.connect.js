import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  cinemaCardSelector,
  choosenTimeSelector,
  timeSelector,
} from 'app/redux/cinema/cinema.selector';

import {setChoosenTime} from 'app/redux/cinema/cinema.action';

import TimeItem from './TimeItem.component';

export default connect(
  createStructuredSelector({
    cinema: cinemaCardSelector,
    time: timeSelector,
    choosenTime: choosenTimeSelector,
  }),
  {
    setChoosenTime,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
    };
  },
)(TimeItem);
