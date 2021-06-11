import React from 'react';
import {Image, ScrollView, TouchableHighlight, View} from 'react-native';
import {styles} from '../Seats/Seats.styles';
import {Text} from 'app/components/partial/Text';

function CinemaCard({
  route,
  cinema,
  film,
  setSelectedSeat,
  selectedSeats,
  removeSelectedSeat,
  totalPrice,
}) {
  const seatChoosing = (rowIndex, seatIndex, price) => {
    if (
      selectedSeats.filter(
        item => item[0] === rowIndex && item[1] === seatIndex,
      ).length
    ) {
      const seatToRemove = selectedSeats.findIndex(
        elem => elem[0] === rowIndex && elem[1] === seatIndex,
      );
      removeSelectedSeat({seatToRemove, price});
    } else {
      setSelectedSeat({seatNumber: [rowIndex, seatIndex], price});
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.screenBackground}>
      <View>
        {'rooms' in cinema
          ? cinema.rooms.types.map(elem => {
              if (elem.id === 1) {
                return (
                  <View style={styles.exampleContainer} key={elem.id}>
                    <View style={styles.littleExample} />
                    <Text>
                      - {elem.name}, price: {elem.price} {cinema.rooms.currency}
                    </Text>
                  </View>
                );
              }
              if (elem.id === 2) {
                return (
                  <View style={styles.exampleContainer} key={elem.id}>
                    <View style={styles.mediumExample} />
                    <Text>
                      - {elem.name}, price: {elem.price} {cinema.rooms.currency}
                    </Text>
                  </View>
                );
              }
              if (elem.id === 3) {
                return (
                  <View style={styles.exampleContainer} key={elem.id}>
                    <View style={styles.largeExample} />
                    <Text>
                      - {elem.name}, price: {elem.price} {cinema.rooms.currency}
                    </Text>
                  </View>
                );
              }
            })
          : null}
      </View>
      <View style={styles.screen}>
        <Text style={styles.screenText}>{film.name}</Text>
      </View>
      {'name' in cinema
        ? cinema.seatsSchema.map((el, rowIndex) => {
            return (
              <View style={styles.row} key={rowIndex}>
                {el.map((seat, seatIndex) => {
                  if (seat === '0') {
                    return (
                      <View style={styles.emptySeat} key={seatIndex}></View>
                    );
                  }
                  if (seat === '1') {
                    return (
                      <TouchableHighlight
                        activeOpacity={0.5}
                        underlayColor="white"
                        style={
                          selectedSeats.filter(
                            item =>
                              item[0] === rowIndex && item[1] === seatIndex,
                          ).length
                            ? [styles.littleSeat, styles.seatSelected]
                            : styles.littleSeat
                        }
                        key={seatIndex}
                        onPress={() =>
                          seatChoosing(
                            rowIndex,
                            seatIndex,
                            cinema.rooms.types[seat - 1].price,
                          )
                        }>
                        <Text></Text>
                      </TouchableHighlight>
                    );
                  }

                  if (seat === '2') {
                    return (
                      <TouchableHighlight
                        activeOpacity={0.5}
                        underlayColor="white"
                        style={
                          selectedSeats.filter(
                            item =>
                              item[0] === rowIndex && item[1] === seatIndex,
                          ).length
                            ? [styles.mediumSeat, styles.seatSelected]
                            : styles.mediumSeat
                        }
                        key={seatIndex}
                        onPress={() =>
                          seatChoosing(
                            rowIndex,
                            seatIndex,
                            cinema.rooms.types[seat - 1].price,
                          )
                        }>
                        <Text></Text>
                      </TouchableHighlight>
                    );
                  }
                  if (seat === '3') {
                    return (
                      <TouchableHighlight
                        activeOpacity={0.5}
                        underlayColor="white"
                        style={
                          selectedSeats.filter(
                            item =>
                              item[0] === rowIndex && item[1] === seatIndex,
                          ).length
                            ? [styles.largeSeat, styles.seatSelected]
                            : styles.largeSeat
                        }
                        key={seatIndex}
                        onPress={() =>
                          seatChoosing(
                            rowIndex,
                            seatIndex,
                            cinema.rooms.types[seat - 1].price,
                          )
                        }>
                        <Text></Text>
                      </TouchableHighlight>
                    );
                  }
                })}
              </View>
            );
          })
        : null}
      {totalPrice && 'rooms' in cinema ? (
        <Text style={styles.totalPriceText}>
          Total price: {totalPrice} {cinema.rooms.currency}
        </Text>
      ) : null}
    </ScrollView>
  );
}

export default CinemaCard;
