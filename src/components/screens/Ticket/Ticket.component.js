import React from 'react';
import {ScrollView, Image} from 'react-native';
import {styles} from '../Ticket/Ticket.styles';
import {Text} from 'app/components/partial/Text';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import {getCinemaLocation} from 'app/utils/cinemaLocation.util';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

function Ticket({route, cinema, film, ts}) {
  if (isEmpty(film)) return null;
  if (isEmpty(cinema)) return null;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Text style={styles.text}>
        {ts('Film')}: {film.name}
      </Text>
      <Text style={styles.text}>
        {ts('Cinema')}: {cinema.name}
      </Text>
      <Text style={styles.text}>
        {ts('Duration')}: {film.duration * 60} {ts('minutes')}
      </Text>
      {route.params.placeNumber
        ? route.params.placeNumber.map((el, id) => {
            return (
              <Text key={id} style={styles.text}>
                {ts('Place')} {id + 1}: {ts('ROW')}: {el.rowIndex + 1}{' '}
                {ts('SEAT')}: {el.seatIndex + 1}
              </Text>
            );
          })
        : null}
      <Text style={styles.text}>
        {ts('Date')}: {moment(route.params.ticketDate).format('LL')}
      </Text>
      <Text style={styles.text}>
        {ts('Time')}: {moment(route.params.ticketDate).format('LT')}
      </Text>
      <Text style={[styles.text, styles.marginLocation]}>
        {ts('Location')}:
      </Text>
      <Image
        style={styles.map}
        source={{
          uri: getCinemaLocation({
            lat: cinema.location.lat,
            lng: cinema.location.lng,
          }),
        }}></Image>
    </ScrollView>
  );
}

export default withTranslation('ticket')(Ticket);
