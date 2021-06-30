import {StyleSheet} from 'react-native';
import {white, black} from 'app/styles/colors.style';
import {gutter} from 'app/styles/structure.style';

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

  ticketsContainer: {
    marginBottom: 27,
    borderColor: black,
    borderWidth: 2,
    height: 170,
    justifyContent: 'center',
    opacity: 0.8,
  },

  ticketText: {
    fontSize: 19.5,
    color: '#e3e3e3',
    paddingBottom: 5,
    paddingTop: 5,
    marginLeft: 15,
  },

  textContainer: {
    width: '100%',
    backgroundColor: black,
    height: 115,
    marginTop: 5,
    justifyContent: 'center',
  },

  indicatorContainer: {
    paddingTop: 50,
  },

  navTabWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    marginBottom: 7,
  },

  signInContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 270,
    color: 'grey',
  },

  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
