import React from 'react';
import {TouchableHighlight, ImageBackground, View} from 'react-native';

import {getStyle} from '../Tickets.styles';

import {Text} from 'app/components/partial/Text';

import moment from 'moment';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {TICKET, TICKETS} from 'app/enum/navigation.enum';

function LittleTicket({
  navigation,
  getFilmCard,
  getCinemaCard,
  styles,
  ts,
  item,
}) {
  const image = {
    uri: 'https://i.ytimg.com/vi/8yny_PR2IOo/maxresdefault.jpg',
  };

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={styles.screenBackground.backgroundColor}
      onPress={() => {
        getFilmCard(item.filmId.id);
        getCinemaCard(item.cinemaId.id);
        navigation.navigate(TICKET, {
          ticketDate: item.ticketDate,
          placeNumber: item.placeNumber,
          prevScreen: TICKETS,
        });
      }}>
      <ImageBackground style={styles.ticketsContainer} source={image}>
        <View style={styles.textContainer}>
          <Text style={styles.ticketText}>
            {ts('cinema')}: {item.cinemaId.name}
          </Text>
          <Text style={styles.ticketText}>
            {ts('film')}: {item.filmId.name}
          </Text>
          <Text style={styles.ticketText}>
            {ts('date')}: {moment(item.ticketDate).format('LLL')}
          </Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
}

export default withTranslation('ticket')(withTheme(getStyle)(LittleTicket));
