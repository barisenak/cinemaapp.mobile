/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {AUTHORIZATION, TICKET, TICKETS} from 'app/enum/navigation.enum';

import {styles} from '../Tickets/Tickets.styles';
import isEmpty from 'lodash/isEmpty';
import {
  SELECTED_TAB_ACTUAL,
  SELECTED_TAB_OUTDATED,
} from 'app/enum/tickets.enum';
import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';
import {STATE_SUCCESS} from 'app/enum/state.enum';

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

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        key={item.id}
        activeOpacity={0.5}
        underlayColor="white"
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
            <Text style={styles.ticketText}>Cinema: {item.cinemaId.name}</Text>
            <Text style={styles.ticketText}>Film: {item.filmId.name}</Text>
            <Text style={styles.ticketText}>
              Date: {moment(item.ticketDate).format('LLL')}
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
  };

  if (!userData)
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.screenBackground}>
        <View style={styles.signInContainer}>
          <Text>Please sign in</Text>
          <Button
            type="primary"
            style={styles.button}
            onPress={() =>
              navigation.navigate(AUTHORIZATION, {prevScreen: TICKETS})
            }>
            LOG IN
          </Button>
        </View>
      </ScrollView>
    );

  if (isEmpty(allBookings))
    return (
      <ScrollView
        contentContainerStyle={styles.indicatorContainer}
        style={styles.screenBackground}>
        <ActivityIndicator size="small" color="black" />
      </ScrollView>
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
          Archive
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
              you don't have any tickets here
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
              you don't have any tickets here
            </Text>
          ) : null}
        </View>
      )}
    </ScrollView>
  );
}

export default Tickets;
