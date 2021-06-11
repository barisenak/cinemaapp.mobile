import {StyleSheet} from 'react-native';
import {white, blue, black} from '../../../styles/colors.style';
import {gutter} from 'app/styles/structure.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
    paddingHorizontal: gutter,
    paddingBottom: gutter * 2,
    paddingTop: 40,
  },

  screenBackground: {
    backgroundColor: 'white',
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
    marginTop: 40,
    marginBottom: 40,
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

  littleSeat: {
    width: 30,
    height: 23,
    backgroundColor: '#D3FFEE',
    borderColor: 'black',
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  mediumSeat: {
    width: 45,
    height: 23,
    backgroundColor: '#6EC2A1',
    borderColor: 'black',
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  largeSeat: {
    width: 65,
    height: 23,
    backgroundColor: '#038955',
    borderColor: 'black',
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  emptySeat: {
    width: 15,
    height: 23,
    backgroundColor: 'white',
  },

  littleExample: {
    width: 30,
    height: 23,
    backgroundColor: '#D3FFEE',
    borderColor: 'black',
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginRight: 5,
    marginBottom: 5,
  },

  mediumExample: {
    width: 45,
    height: 23,
    backgroundColor: '#6EC2A1',
    borderColor: 'black',
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginRight: 5,
    marginBottom: 5,
  },

  largeExample: {
    width: 65,
    height: 23,
    backgroundColor: '#038955',
    borderColor: 'black',
    borderWidth: 0.7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginRight: 5,
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
    fontSize: 22,
    color: black,
  },

  seatSelected: {
    backgroundColor: '#00FED3',
  },

  totalPriceText: {
    marginTop: 40,
  },
});
