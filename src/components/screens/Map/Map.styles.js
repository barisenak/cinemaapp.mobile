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
    width: '100%',
    height: '100%',
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
    bottom: 172,
    left: 0,
    height: 90,
    backgroundColor: white,
  },

  fadingText: {
    fontSize: 28,
  },

  markersContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },

  listContainer: {
    justifyContent: 'center',
  },

  markerWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
