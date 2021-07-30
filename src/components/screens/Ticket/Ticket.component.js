import React from 'react';
import {ScrollView, Image} from 'react-native';
import {getStyle} from '../Ticket/Ticket.styles';
import {Text} from 'app/components/partial/Text';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import {getCinemaLocation} from 'app/utils/cinemaLocation.util';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function Ticket({route, cinema, film, ts, styles}) {
  if (isEmpty(film)) return null;
  if (isEmpty(cinema)) return null;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <Text style={styles.text}>
        {ts('film')}: {film.name}
      </Text>
      <Text style={styles.text}>
        {ts('cinema')}: {cinema.name}
      </Text>
      <Text style={styles.text}>
        {ts('duration')}: {film.duration * 60} {ts('minutes')}
      </Text>
      {route.params.placeNumber
        ? route.params.placeNumber.map((el, id) => {
            return (
              <Text key={id} style={styles.text}>
                {ts('place')} {id + 1}: {ts('row')}: {el.rowIndex + 1}{' '}
                {ts('seat')}: {el.seatIndex + 1}
              </Text>
            );
          })
        : null}
      <Text style={styles.text}>
        {ts('date')}: {moment(route.params.ticketDate).format('LL')}
      </Text>
      <Text style={styles.text}>
        {ts('time')}: {moment(route.params.ticketDate).format('LT')}
      </Text>
      <Text style={[styles.text, styles.marginLocation]}>
        {ts('location')}:
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

export default withTranslation('ticket')(withTheme(getStyle)(Ticket));
