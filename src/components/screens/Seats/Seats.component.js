import React, {useEffect} from 'react';

import {FlatList, ScrollView, TouchableHighlight, View} from 'react-native';
import {seatTypeStyles, getStyle} from '../Seats/Seats.styles';
import {Text} from 'app/components/partial/Text';
import {Button} from 'app/components/partial/Button';
import DatePicker from 'react-native-date-picker';
import isEmpty from 'lodash/isEmpty';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function Seats({
  cinema,
  film,
  setSelectedSeat,
  selectedSeats,
  removeSelectedSeat,
  totalPrice,
  setDate,
  date,
  bookedSeats,
  booking,
  setTime,
  setChoosenTime,
  time,
  choosenTime,
  getBookings,
  clearState,
  setDateTime,
  clearSelectedSeats,
  ts,
  styles,
  onPayPress,
}) {
  const seatChoosing = (rowIndex, seatIndex, price) => {
    if (
      selectedSeats.filter(
        item => item.rowIndex === rowIndex && item.seatIndex === seatIndex,
      ).length
    ) {
      const seatToRemove = selectedSeats.findIndex(
        elem => elem.rowIndex === rowIndex && elem.seatIndex === seatIndex,
      );
      removeSelectedSeat({seatToRemove, price});
    } else {
      setSelectedSeat({seatNumber: {rowIndex, seatIndex}, price});
    }
  };

  const renderItem = ({item}) => {
    if (cinema.workingTime.start + item < cinema.workingTime.end) {
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
  };

  const renderSchemaItem = ({item, index}) => {
    return (
      <View style={styles.row} key={index}>
        {item.map((seat, seatIndex) => {
          if (seat === '0') {
            return <View style={styles.emptySeat} key={seatIndex}></View>;
          }
          return (
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={
                bookedSeats?.filter(
                  el => el.rowIndex === index && el.seatIndex === seatIndex,
                ).length
                  ? 'grey'
                  : 'white'
              }
              style={
                selectedSeats.filter(
                  el => el.rowIndex === index && el.seatIndex === seatIndex,
                ).length
                  ? [seatTypeStyles[seat.toString()], styles.seatSelected]
                  : bookedSeats?.filter(
                      el => el.rowIndex === index && el.seatIndex === seatIndex,
                    ).length
                  ? [seatTypeStyles[seat.toString()], styles.seatBooked]
                  : seatTypeStyles[seat.toString()]
              }
              key={seatIndex}
              onPress={() =>
                bookedSeats?.filter(
                  el => el.rowIndex === index && el.seatIndex === seatIndex,
                ).length
                  ? null
                  : seatChoosing(
                      index,
                      seatIndex,
                      cinema.rooms.types[seat - 1].price,
                    )
              }>
              <Text />
            </TouchableHighlight>
          );
        })}
      </View>
    );
  };

  useEffect(() => {
    setTime(new Date().getHours());
    time % 2 === 0 ? setChoosenTime(time + 2) : setChoosenTime(time + 1);
  }, [cinema]);

  useEffect(() => {
    clearSelectedSeats();
    setDateTime(new Date(date).setHours(choosenTime + 3, 0, 0, 0));
    'id' in cinema &&
      getBookings({
        filmId: film.id,
        cinemaId: cinema.id,
        dateTime: new Date(date).setHours(choosenTime + 3, 0, 0, 0),
      });
  }, [choosenTime, date, cinema]);

  useEffect(() => {
    if (date.getTime() - lastTimeToday > 0) {
      setTime(cinema.workingTime.start - 2);
      setChoosenTime(cinema.workingTime.start);
    } else {
      setTime(new Date().getHours());
      const presentTime = new Date().getHours();

      presentTime % 2 === 0
        ? setChoosenTime(presentTime + 2)
        : setChoosenTime(presentTime + 1);
    }
  }, [date]);

  useEffect(() => {
    clearState();
  }, [booking]);

  const today = new Date(Date.now());
  const lastTimeToday = new Date(Date.now()).setHours(24 + 3, 0, 59, 0);

  const timePieces = [0, 2, 4, 6, 8, 10, 12, 14];

  if (isEmpty(cinema)) return null;

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

      <FlatList
        data={cinema.seatsSchema}
        renderItem={renderSchemaItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.totalPriceText}>
        {ts('totalPrice:')} {totalPrice} {cinema.rooms.currency}
      </Text>

      <View>
        <FlatList
          data={timePieces}
          contentContainerStyle={styles.timeContainer}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
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
