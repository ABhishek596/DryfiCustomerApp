import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  center: {
    alignItems: 'center',
  },

  title_box: {
    width: SIZES.width * 0.9,
    marginBottom: SIZES.height * 0.025,
  },

  title: {
    fontFamily: FONTS.bold,
    // fontSize: 22,
    fontSize: SIZES.width * 0.06,
    color: COLORS.black,
    marginBottom: -4,
  },

  justify_between: {
    // width: SIZES.width * .9,
    height: SIZES.height * 0.78,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.height * 0.03,
    // borderWidth: 1,
  },

  text: {
    fontFamily: FONTS.regular,
    // fontSize: 14,
    fontSize: SIZES.width * 0.038,
    color: COLORS.black,
    marginBottom: -4,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.width * 0.9,
  },
});
