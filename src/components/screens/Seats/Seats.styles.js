import {StyleSheet} from 'react-native';
import {white, black} from 'app/styles/colors.style';
import {gutter} from 'app/styles/structure.style';
import {fontSize} from 'app/styles/font.style';
import {
  SEAT_TYPE_CHAIR,
  SEAT_TYPE_FRIENDS_SEATS,
  SEAT_TYPE_LOVE_SEATS,
} from 'app/enum/seatType.enum';

export const seatTypeStyles = {
  [SEAT_TYPE_CHAIR]: {
    width: 29,
    height: 23,
    backgroundColor: '#D3FFEE',
    borderColor: black,
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginBottom: 5,
  },

  [SEAT_TYPE_LOVE_SEATS]: {
    width: 42,
    height: 23,
    backgroundColor: '#6EC2A1',
    borderColor: black,
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginBottom: 5,
  },

  [SEAT_TYPE_FRIENDS_SEATS]: {
    width: 61,
    height: 23,
    backgroundColor: '#038955',
    borderColor: black,
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
    paddingHorizontal: gutter,
    paddingBottom: gutter * 2,
    paddingTop: 10,
  },

  screenBackground: {
    backgroundColor: white,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.2,
  },

  screen: {
    backgroundColor: '#BDBDBD',
    width: '100%',
    height: 70,
    marginTop: 15,
    marginBottom: 25,
    transform: [{rotateX: '-15deg'}],
    shadowColor: '#5B5B5B',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.7,
    shadowRadius: 11.35,
    elevation: 19,
  },

  emptySeat: {
    width: 15,
    height: 23,
    backgroundColor: white,
  },

  exampleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  screenText: {
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    marginTop: 21,
    fontSize: fontSize.heading,
    color: black,
  },

  seatSelected: {
    backgroundColor: '#00FED3',
  },

  seatBooked: {
    backgroundColor: 'grey',
  },

  totalPriceText: {
    marginTop: 20,
  },

  datePickerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },

  time: {
    backgroundColor: '#b6e8f2',
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  blockedTime: {
    backgroundColor: '#b5b5b5',
  },

  checkedTime: {
    backgroundColor: '#52ffeb',
  },
});
