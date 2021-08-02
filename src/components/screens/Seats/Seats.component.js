import React, {useEffect} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {seatTypeStyles, getStyle} from '../Seats/Seats.styles';

import {Text} from 'app/components/partial/Text';
import {Button} from 'app/components/partial/Button';

import isEmpty from 'lodash/isEmpty';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import TimeItem from './TimeItem/TimeItem.connect';
import SchemaItem from './SchemaItem/SchemaItem.connect';

function Seats({
  cinema,
  film,
  totalPrice,
  setDate,
  date,
  booking,
  setTime,
  setChoosenTime,
  time,
  choosenTime,
  clearState,
  ts,
  styles,
  onPayPress,
  onChangeTimeOrDate,
  setInitTimeParams,
}) {
  const renderTimeItem = ({item}) => {
    if (cinema.workingTime.start + item < cinema.workingTime.end) {
      return <TimeItem item={item} />;
    }
  };

  const renderSchemaItem = ({item, index}) => {
    return <SchemaItem item={item} index={index} />;
  };

  useEffect(() => {
    setTime(new Date().getHours());
    time % 2 === 0 ? setChoosenTime(time + 2) : setChoosenTime(time + 1);
  }, [cinema]);

  useEffect(() => {
    onChangeTimeOrDate();
  }, [choosenTime, date, cinema]);

  useEffect(() => {
    setInitTimeParams();
  }, [date]);

  useEffect(() => {
    clearState();
  }, [booking]);

  const today = new Date(Date.now());

  const timePieces = [0, 2, 4, 6, 8, 10, 12, 14];

  if (isEmpty(cinema)) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View>
        {cinema.rooms.types.map(elem => (
          <View style={styles.exampleContainer} key={elem.id}>
            <View style={seatTypeStyles[elem.id.toString()]} />
            <Text style={styles.exampleText}>
              {' '}
              - {elem.name}, {ts('price')}: {elem.price} {cinema.rooms.currency}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.screen}>
        <Text style={styles.screenText}>{film.name}</Text>
      </View>

      <FlatList data={cinema.seatsSchema} renderItem={renderSchemaItem} />

      <Text style={styles.totalPriceText}>
        {ts('totalPrice:')} {totalPrice} {cinema.rooms.currency}
      </Text>

      <View>
        <FlatList
          data={timePieces}
          contentContainerStyle={styles.timeContainer}
          horizontal
          renderItem={renderTimeItem}
        />
      </View>

      <View style={styles.datePickerContainer}>
        <DatePicker
          date={date}
          onDateChange={dateToRedux => setDate(dateToRedux)}
          minimumDate={today}
          mode="date"
        />
      </View>

      <Button
        type="primary"
        disabled={totalPrice ? false : true}
        onPress={onPayPress}>
        {ts('pay')}
      </Button>
    </ScrollView>
  );
}

export default withTranslation('seats')(withTheme(getStyle)(Seats));
