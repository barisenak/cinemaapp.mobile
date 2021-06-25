/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, {useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {AUTHORIZATION, TICKET, TICKETS} from 'app/enum/navigation.enum';

import {styles} from '../Tickets/Tickets.styles';
import isEmpty from 'lodash/isEmpty';
import {
  SELECTED_TAB_ACTUAL,
  SELECTED_TAB_OUTDATED,
} from 'app/enum/tickets.enum';
import {Button} from 'app/components/partial/Button';

function Tickets({
  navigation,
  getAllUserBookings,
  user,
  allBookings,
  booking,
  getFilmCard,
  getCinemaCard,
  selectedTab,
  setSelectedTab,
  userData,
}) {
  const presentTime = new Date(Date.now()).getHours();
  useEffect(() => {
    user
      ? getAllUserBookings({
          userId: user.id,
          presentDateTime: new Date(Date.now()).setHours(presentTime + 3),
        })
      : null;
  }, [user, booking]);

  const image = {
    uri: 'https://i.ytimg.com/vi/8yny_PR2IOo/maxresdefault.jpg',
  };

  if (isEmpty(allBookings))
    return (
      <ScrollView
        contentContainerStyle={styles.indicatorContainer}
        style={styles.screenBackground}>
        <ActivityIndicator size="small" color="black" />
      </ScrollView>
    );

  if (!userData)
    return (
      <View style={styles.signInContainer}>
        <Text>Please sign in</Text>
        <Button
          type="primary"
          style={styles.button}
          onPress={() => navigation.navigate(AUTHORIZATION)}>
          LOG IN
        </Button>
      </View>
    );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View style={styles.navTabWrapper}>
        <Button
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_OUTDATED ? {fontWeight: 'bold'} : {},
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_OUTDATED);
          }}>
          Outdated
        </Button>
        <Button
          type="textLink"
          style={{
            text:
              selectedTab === SELECTED_TAB_ACTUAL ? {fontWeight: 'bold'} : {},
          }}
          onPress={() => {
            setSelectedTab(SELECTED_TAB_ACTUAL);
          }}>
          Actual
        </Button>
      </View>
      {selectedTab === SELECTED_TAB_OUTDATED ? (
        <View>
          {allBookings.old.map(el => (
            <TouchableHighlight
              key={el.id}
              activeOpacity={0.5}
              underlayColor="white"
              onPress={() => {
                getFilmCard(el.filmId.id);
                getCinemaCard(el.cinemaId.id);
                navigation.navigate(TICKET, {
                  ticketDate: el.ticketDate,
                  placeNumber: el.placeNumber,
                  prevScreen: TICKETS,
                });
              }}>
              <ImageBackground style={styles.ticketsContainer} source={image}>
                <View style={styles.textContainer}>
                  <Text style={styles.ticketText}>
                    Cinema: {el.cinemaId.name}
                  </Text>
                  <Text style={styles.ticketText}>Film: {el.filmId.name}</Text>
                  <Text style={styles.ticketText}>
                    Date: {moment(el.ticketDate).format('LLL')}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          ))}
          {!allBookings.old.length && <Text>you don't have any tickets</Text>}
        </View>
      ) : (
        <View>
          {allBookings.actual.map(el => (
            <TouchableHighlight
              key={el.id}
              activeOpacity={0.5}
              underlayColor="white"
              onPress={() => {
                getFilmCard(el.filmId.id);
                getCinemaCard(el.cinemaId.id);
                navigation.navigate(TICKET, {
                  ticketDate: el.ticketDate,
                  placeNumber: el.placeNumber,
                  prevScreen: TICKETS,
                });
              }}>
              <ImageBackground style={styles.ticketsContainer} source={image}>
                <View style={styles.textContainer}>
                  <Text style={styles.ticketText}>
                    Cinema: {el.cinemaId.name}
                  </Text>
                  <Text style={styles.ticketText}>Film: {el.filmId.name}</Text>
                  <Text style={styles.ticketText}>
                    Date: {moment(el.ticketDate).format('LLL')}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          ))}
          {!allBookings.actual.length && (
            <Text>you don't have any tickets</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
}

export default Tickets;
