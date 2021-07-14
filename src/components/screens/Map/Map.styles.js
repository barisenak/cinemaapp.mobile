import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';

export const getStyles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundColor,
    },
  });

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
    position: 'relative',
  },

  screenBackground: {
    backgroundColor: white,
  },

  text: {
    marginBottom: 20,
  },

  marginLocation: {
    marginTop: 30,
  },

  map: {
    width: 400,
    height: 400,
  },

  icon: {
    marginRight: 10,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  pointContainer: {
    padding: 30,
  },

  myClusterStyle: {
    backgroundColor: 'orange',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  myClusterTextStyle: {
    textAlign: 'center',
  },

  fadingContainer: {
    position: 'absolute',
    transform: [{translateY: -100}],
    left: 0,
    height: 90,
  },

  fadingText: {
    fontSize: 28,
  },

  markerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: white,
    borderWidth: 0.2,
    width: 385,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 7,
  },
});
