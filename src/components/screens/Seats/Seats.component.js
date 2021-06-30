import React, {useEffect} from 'react';

import {ScrollView, TouchableHighlight, View} from 'react-native';
import {styles, seatTypeStyles} from '../Seats/Seats.styles';
import {Text} from 'app/components/partial/Text';
import {Button} from 'app/components/partial/Button';
import {SEATS_CARD, TICKET} from 'app/enum/navigation.enum';
import DatePicker from 'react-native-date-picker';
import isEmpty from 'lodash/isEmpty';

function CinemaCard({
  navigation,
  user,
  cinema,
  film,
  setSelectedSeat,
  selectedSeats,
  removeSelectedSeat,
  totalPrice,
  setDate,
  date,
  setBooking,
  bookedSeats,
  booking,
  setTime,
  setChoosenTime,
  time,
  choosenTime,
  getBookings,
  clearState,
  setDateTime,
  dateTime,
  clearSelectedSeats,
  clearBookedSeats,
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

  useEffect(() => {
    setTime(new Date().getHours());
    time % 2 === 0 ? setChoosenTime(time + 2) : setChoosenTime(time + 1);
  }, [cinema]);

  useEffect(() => {
    clearSelectedSeats();
    setDateTime(new Date(date).setHours(choosenTime + 3, 0, 0, 0));
    // REVIEW: Please don't use {in}
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
    // clearBookedSeats({dateTime: booking.filmDate});
  }, [booking]);

  const today = new Date(Date.now());
  const lastTimeToday = new Date(Date.now()).setHours(24 + 3, 0, 59, 0);

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
            <Text>
              {' '}
              - {elem.name}, price: {elem.price} {cinema.rooms.currency}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.screen}>
        <Text style={styles.screenText}>{film.name}</Text>
      </View>

      {cinema.seatsSchema.map((el, rowIndex) => {
        return (
          <View style={styles.row} key={rowIndex}>
            {el.map((seat, seatIndex) => {
              if (seat === '0') {
                return <View style={styles.emptySeat} key={seatIndex} />;
              }
              return (
                <TouchableHighlight
                  activeOpacity={0.5}
                  underlayColor={
                    bookedSeats?.filter(
                      item =>
                        item.rowIndex === rowIndex &&
                        item.seatIndex === seatIndex,
                    ).length
                      ? 'grey'
                      : 'white'
                  }
                  style={
                    selectedSeats.filter(
                      item =>
                        item.rowIndex === rowIndex &&
                        item.seatIndex === seatIndex,
                    ).length
                      ? [seatTypeStyles[seat.toString()], styles.seatSelected]
                      : bookedSeats?.filter(
                          item =>
                            item.rowIndex === rowIndex &&
                            item.seatIndex === seatIndex,
                        ).length
                      ? [seatTypeStyles[seat.toString()], styles.seatBooked]
                      : seatTypeStyles[seat.toString()]
                  }
                  key={seatIndex}
                  onPress={() =>
                    // REVIEW: Move that logic out of JSX.
                    bookedSeats?.filter(
                      item =>
                        item.rowIndex === rowIndex &&
                        item.seatIndex === seatIndex,
                    ).length
                      ? null
                      : seatChoosing(
                          rowIndex,
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
      })}

      {
        <Text style={styles.totalPriceText}>
          Total price: {totalPrice} {cinema.rooms.currency}
        </Text>
      }

      {
        // REVIEW: Let's place that in a separate component
        <View style={styles.timeContainer}>
          {timePieces.map((el, id) => {
            if (cinema.workingTime.start + el < cinema.workingTime.end) {
              return (
                <TouchableHighlight
                  style={
                    cinema.workingTime.start + el === choosenTime
                      ? [styles.time, styles.checkedTime]
                      : cinema.workingTime.start + el > time
                      ? styles.time
                      : [styles.time, styles.blockedTime]
                  }
                  onPress={() =>
                    cinema.workingTime.start + el > time
                      ? setChoosenTime(cinema.workingTime.start + el)
                      : null
                  }
                  activeOpacity={0.2}
                  underlayColor={
                    cinema.workingTime.start + el > time ? 'white' : '#b5b5b5'
                  }
                  key={id}>
                  <Text>{cinema.workingTime.start + el}:00</Text>
                </TouchableHighlight>
              );
            }
          })}
        </View>
      }

      <View style={styles.datePickerContainer}>
        <DatePicker
          date={date}
          onDateChange={dateToRedux => setDate(dateToRedux)}
          minimumDate={today}
          mode="date"
          minuteInterval={30}
          style={styles.datePicker}
        />
      </View>

      {totalPrice ? (
        <Button
          type="primary"
          onPress={() => {
            navigation.navigate(TICKET, {
              ticketDate: new Date(date).setHours(choosenTime, 0, 0, 0),
              placeNumber: selectedSeats,
              prevScreen: SEATS_CARD,
            });
            setBooking({
              userId: user.id,
              cinemaId: cinema.id,
              filmId: film.id,
              bookingDate: Date.now(),
              filmDate: new Date(date).setHours(choosenTime + 3, 0, 0, 0),
              ticketDate: new Date(date).setHours(choosenTime, 0, 0, 0),
              placeNumber: selectedSeats,
            });
          }}>
          Pay
        </Button>
      ) : null}
    </ScrollView>
  );
}

export default CinemaCard;
