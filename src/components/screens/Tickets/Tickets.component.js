/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  ImageBackground,
  FlatList,
} from 'react-native';
import {AUTHORIZATION, TICKET, TICKETS} from 'app/enum/navigation.enum';

import isEmpty from 'lodash/isEmpty';
import {
  SELECTED_TAB_ACTUAL,
  SELECTED_TAB_OUTDATED,
} from 'app/enum/tickets.enum';
import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';
import {STATE_SUCCESS} from 'app/enum/state.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {getStyle} from './Tickets.styles';

function Tickets({
  navigation,
  getActualUserBookings,
  getOldUserBookings,
  user,
  allBookings,
  booking,
  getFilmCard,
  getCinemaCard,
  selectedTab,
  setSelectedTab,
  userData,
  state,
  ts,
  styles,
}) {
  const presentTime = new Date(Date.now()).getHours();

  useEffect(() => {
    if (user) {
      getActualUserBookings({
        userId: user.id,
        presentDateTime: new Date(Date.now()).setHours(presentTime + 3),
      });

      getOldUserBookings({
        userId: user.id,
        presentDateTime: new Date(Date.now()).setHours(presentTime + 3),
      });
    }
  }, [user, booking]);

  const image = {
    uri: 'https://i.ytimg.com/vi/8yny_PR2IOo/maxresdefault.jpg',
  };

  // REVIEW: Let's create a new component for Ticket item,
  // so we can reduce base component size
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        // REVIEW: The `key` attribute is unneeded here
        // since FlatList provides `keyExtractor`.
        key={item.id}
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
              {ts('Cinema')}: {item.cinemaId.name}
            </Text>
            <Text style={styles.ticketText}>
              {ts('Film')}: {item.filmId.name}
            </Text>
            <Text style={styles.ticketText}>
              {ts('Date')}: {moment(item.ticketDate).format('LLL')}
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
  };

  if (!userData) {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.screenBackground}>
        <View style={styles.signInContainer}>
          <Text style={styles.text}>{ts('Please sign in')}</Text>
          <Button
            type="primary"
            style={styles.button}
            onPress={() =>
              navigation.navigate(AUTHORIZATION, {prevScreen: TICKETS})
            }>
            {ts('login')}
          </Button>
        </View>
      </ScrollView>
    );
  }

  if (isEmpty(allBookings)) {
    return (
      <ScrollView
        contentContainerStyle={styles.indicatorContainer}
        style={styles.screenBackground}>
        <ActivityIndicator size="small" color="black" />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.navTabWrapper}>
        <Button
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_OUTDATED
                ? [{fontWeight: 'bold'}, styles.text]
                : styles.text,
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_OUTDATED);
          }}>
          {ts('Archive')}
        </Button>
        <Button
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_ACTUAL
                ? [{fontWeight: 'bold'}, styles.text]
                : styles.text,
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_ACTUAL);
          }}>
          {ts('Actual')}
        </Button>
      </View>
      {selectedTab === SELECTED_TAB_OUTDATED ? (
        <View>
          {state === STATE_SUCCESS && allBookings.old ? (
            <FlatList
              data={allBookings.old}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              refreshing="true"
            />
          ) : (
            <ScrollView
              contentContainerStyle={styles.indicatorContainer}
              style={styles.screenBackground}>
              <ActivityIndicator size="small" color="black" />
            </ScrollView>
          )}
          {isEmpty(allBookings.old) ? (
            <Text style={styles.emptyText}>
              {ts("you don't have any tickets here")}
            </Text>
          ) : null}
        </View>
      ) : (
        <View>
          {state === STATE_SUCCESS && allBookings.actual ? (
            <FlatList
              data={allBookings.actual}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              refreshing="true"
            />
          ) : (
            <ScrollView
              contentContainerStyle={styles.indicatorContainer}
              style={styles.screenBackground}>
              <ActivityIndicator size="small" color="black" />
            </ScrollView>
          )}
          {isEmpty(allBookings.actual) ? (
            <Text style={styles.emptyText}>
              {ts("you don't have any tickets here")}
            </Text>
          ) : null}
        </View>
      )}
    </ScrollView>
  );
}

export default withTranslation('tickets')(withTheme(getStyle)(Tickets));
