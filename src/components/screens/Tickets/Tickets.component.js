/* eslint-disable react-native/no-inline-styles */
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
import {STATE_SUCCESS} from 'app/enum/state.enum';
import {
  SELECTED_TAB_ACTUAL,
  SELECTED_TAB_OUTDATED,
} from 'app/enum/tickets.enum';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyle} from './Tickets.styles';

import isEmpty from 'lodash/isEmpty';

import LittleTicketConnect from './LittleTicket/LittleTicket.connect';

function Tickets({
  navigation,
  getActualUserBookings,
  getOldUserBookings,
  user,
  allBookings,
  booking,
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

  const renderItem = ({item}) => {
    return <LittleTicketConnect item={item} navigation={navigation} />;
  };

  if (!userData) {
    return (
      <View style={styles.screenBackground}>
        <View style={styles.signInContainer}>
          <Text style={styles.text}>{ts('pleaseSignIn')}</Text>
          <Button
            type="primary"
            style={styles.button}
            onPress={() =>
              navigation.navigate(AUTHORIZATION, {prevScreen: TICKETS})
            }>
            {ts('login')}
          </Button>
        </View>
      </View>
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
    <View
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
          {ts('archive')}
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
          {ts('actual')}
        </Button>
      </View>
      {selectedTab === SELECTED_TAB_OUTDATED ? (
        <View style={styles.sectionContainer}>
          {state === STATE_SUCCESS && allBookings.old ? (
            <FlatList
              data={allBookings.old}
              renderItem={renderItem}
              style={styles.flatList}
            />
          ) : (
            <ScrollView
              contentContainerStyle={styles.indicatorContainer}
              style={styles.screenBackground}>
              <ActivityIndicator size="small" color="black" />
            </ScrollView>
          )}
          {isEmpty(allBookings.old) ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{ts('youNotHaveTickets')}</Text>
            </View>
          ) : null}
        </View>
      ) : (
        <View style={styles.sectionContainer}>
          {state === STATE_SUCCESS && allBookings.actual ? (
            <FlatList
              data={allBookings.actual}
              renderItem={renderItem}
              style={styles.flatList}
            />
          ) : (
            <ScrollView
              contentContainerStyle={styles.indicatorContainer}
              style={styles.screenBackground}>
              <ActivityIndicator size="small" color="black" />
            </ScrollView>
          )}

          {isEmpty(allBookings.actual) ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{ts('youNotHaveTickets')}</Text>
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
}

export default withTranslation('tickets')(withTheme(getStyle)(Tickets));
