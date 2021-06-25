import React, {useEffect} from 'react';
import {
  ScrollView,
  TouchableHighlight,
  View,
  BackHandler,
  Image,
} from 'react-native';
import {styles} from '../Ticket/Ticket.styles';
import {Text} from 'app/components/partial/Text';
import {Button} from 'app/components/partial/Button';
import moment from 'moment';
import {FILMS} from 'app/enum/navigation.enum';
import isEmpty from 'lodash/isEmpty';

function Ticket({navigation, route, cinema, film, selectedSeats, date}) {
  function handleBackButtonClick() {
    navigation.navigate(FILMS);
    return true;
  }

  if (isEmpty(film)) return null;
  if (isEmpty(cinema)) return null;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Text style={styles.text}>Film: {film.name}</Text>
      <Text style={styles.text}>Cinema: {cinema.name}</Text>
      <Text style={styles.text}>Duration: {film.duration * 60} minutes</Text>
      {route.params.placeNumber
        ? route.params.placeNumber.map((el, id) => {
            return (
              <Text key={id} style={styles.text}>
                Place {id + 1}: ROW: {el.rowIndex + 1} SEAT: {el.seatIndex + 1}
              </Text>
            );
          })
        : null}
      <Text style={styles.text}>
        Date: {moment(route.params.ticketDate).format('LL')}{' '}
      </Text>
      <Text style={styles.text}>
        Time: {moment(route.params.ticketDate).format('LT')}{' '}
      </Text>
      <Text style={[styles.text, styles.marginLocation]}>Location: </Text>
      <Image
        style={styles.map}
        source={{
          uri: `https://maps.googleapis.com/maps/api/staticmap?center=${cinema.location.lat},${cinema.location.lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCJuEGVKyVGH4a6WABnyMCExwUBv9Ut6mw`,
        }}></Image>
    </ScrollView>
  );
}

export default Ticket;
