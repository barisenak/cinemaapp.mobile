import React from 'react';
import {TouchableHighlight} from 'react-native';

import {getStyle} from '../Seats.styles';

import {Text} from 'app/components/partial/Text';

import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function TimeItem({cinema, setChoosenTime, time, choosenTime, styles, item}) {
  return (
    <TouchableHighlight
      style={
        cinema.workingTime.start + item === choosenTime
          ? [styles.time, styles.checkedTime]
          : cinema.workingTime.start + item > time
          ? styles.time
          : [styles.time, styles.blockedTime]
      }
      onPress={() =>
        cinema.workingTime.start + item > time
          ? setChoosenTime(cinema.workingTime.start + item)
          : null
      }
      activeOpacity={0.2}
      underlayColor={
        cinema.workingTime.start + item > time ? 'white' : '#b5b5b5'
      }
      key={cinema.workingTime.start + item}>
      <Text>{cinema.workingTime.start + item}:00</Text>
    </TouchableHighlight>
  );
}

export default withTheme(getStyle)(TimeItem);
