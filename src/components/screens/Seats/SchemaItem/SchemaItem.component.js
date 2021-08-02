import React from 'react';
import {TouchableHighlight, View} from 'react-native';

import {seatTypeStyles, getStyle} from '../Seats.styles';

import {Text} from 'app/components/partial/Text';

import {withTheme} from 'app/providers/ThemeProvider/withTheme';

function SchemaItem({
  cinema,
  bookedSeats,
  removeSelectedSeat,
  setSelectedSeat,
  selectedSeats,
  styles,
  item,
  index,
}) {
  const seatChoosing = (rowIndex, seatIndex, price) => {
    if (
      selectedSeats.filter(
        selectedItem =>
          selectedItem.rowIndex === rowIndex &&
          selectedItem.seatIndex === seatIndex,
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

  return (
    <View style={styles.row} key={index}>
      {item.map((seat, seatIndex) => {
        if (seat === '0') {
          return <View style={styles.emptySeat} key={seatIndex} />;
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
}

export default withTheme(getStyle)(SchemaItem);
